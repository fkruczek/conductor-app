import { ScoreLocation } from 'models'
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { emitConductorPageChange, emitConductorStartingMeasure } from 'sockets'
import { RerenderButton, ScoreNavigation } from './controls'
import { Loader } from './loader'

interface ScoreProps {
  musicXML: string
  conductorLocation: ScoreLocation
  isOwner: boolean
}
export default function Score({ musicXML, conductorLocation, isOwner }: ScoreProps): ReactElement {
  const [score, setScore] = useState<OpenSheetMusicDisplay>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [startingMeasure, setStartingMeasure] = useState(1)
  const [showRerender, setShowRerender] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { conductorCurrentPage, conductorPages, startingMeasure } = conductorLocation
    if (startingMeasure) {
      goToMeasure(startingMeasure)
      return
    }
    if (!conductorPages.length) return
    handleConductorPageChange(conductorCurrentPage, conductorPages)
    // TODO: make a callback from handle fn
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conductorLocation])

  useEffect(() => {
    window.addEventListener('resize', () => setShowRerender(true))
    return () => {
      window.removeEventListener('resize', () => null)
    }
  }, [])

  useLayoutEffect(() => {
    setStartingMeasure(0)

    if (!divRef.current) return
    if (score) {
      score.load(musicXML).then(() => {
        setIsLoading(true)
        setTimeout(() => {
          score.zoom = 0.7
          score.render()
          score.cursor.show()
          setIsLoading(false)
        })
      })
      return
    }

    const newScore = new OpenSheetMusicDisplay(divRef.current, {
      followCursor: false,
      autoResize: false,
      drawTitle: false,
    })

    newScore.load(musicXML).then(() => {
      // TODO: maybe put here rerenderScore()
      setTimeout(() => {
        newScore.zoom = 0.7
        newScore.setPageFormat(`${window.innerWidth}x${window.innerHeight}`)
        newScore.render()
        newScore.cursor.show()
        setScore(newScore)
        setIsLoading(false)
      })
    })
    // TODO: make a callback from get fn
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicXML])

  function emitPageChange() {
    emitConductorPageChange({
      conductorCurrentPage: getMyCurrentPage(),
      conductorPages: getMyPagesArray(),
    })
  }

  function goToMeasure(targetMeasure: number, isStartingMeasure = false) {
    // in case we want to go back
    score?.cursor.reset()
    while (getCurrentMeasureNumber() < targetMeasure) {
      score?.cursor.next()
    }
    if (targetMeasure === 0) {
      window.scrollTo(0, 0)
      return
    }

    // broadcasting measure AFTER setting cursor
    if (isOwner) {
      if (isStartingMeasure) {
        emitConductorStartingMeasure(targetMeasure)
      } else {
        emitPageChange()
      }
    }

    scrollToCursor()
  }

  function scrollToCursor() {
    const diffToBar = score?.cursor.cursorElement.getBoundingClientRect().top ?? 0
    window.scrollBy({
      // TODO: calculate "top" in different way
      // Eventually it has to be the top border of current cursor measure (is it posible?)
      top: diffToBar - 50,
      behavior: 'smooth',
    })
  }

  function goToPage(pageNumber: number) {
    const musicPage = score?.GraphicSheet.MusicPages[pageNumber - 1]
    if (musicPage) {
      const firstMeasureOfGivenPage =
        musicPage.MusicSystems[0].GraphicalMeasures[0][0].MeasureNumber
      goToMeasure(firstMeasureOfGivenPage)
    }
  }

  function getCurrentMeasureNumber() {
    if (!score) return 0
    return score.cursor.iterator.CurrentMeasureIndex + 1
  }

  function goToBeggining() {
    goToMeasure(startingMeasure, true)
  }

  function getMyCurrentPage() {
    if (!score) return 0
    return score.cursor.currentPageNumber
  }

  function goToNextPage() {
    goToPage(getMyCurrentPage() + 1)
  }

  function getMyPagesArray() {
    // TODO: to reconsider - keep it in state or not?
    // there was problems with useLayoutEffect
    if (!score) return []
    return score.GraphicSheet.MusicPages.map(
      ({ MusicSystems }) => MusicSystems[0].GraphicalMeasures[0][0].MeasureNumber
    )
  }

  function rerenderScore() {
    if (!score) return
    scrollTo({ top: 0 })
    setIsLoading(true)
    setTimeout(() => {
      score.zoom = 0.7
      score.setPageFormat(`${window.innerWidth}x${window.innerHeight}`)
      score.render()
      goToBeggining()
      setShowRerender(false)
      setIsLoading(false)
    })
  }

  function handleConductorPageChange(conductorCurrentPage: number, conductorPages: number[]) {
    let myPage = 0
    const myPagesArray = getMyPagesArray()
    console.log(conductorCurrentPage, conductorPages)
    // TODO: maybe i dont need to send all pages but onli first  and last measure
    const firstConductorMeasure = conductorPages[conductorCurrentPage - 1]
    const lastConductorMeasure = conductorPages[conductorCurrentPage] - 1 ?? null
    if (!lastConductorMeasure) {
      goToMeasure(myPagesArray[myPagesArray.length - 1])
    }

    while (firstConductorMeasure >= myPagesArray[myPage]) myPage++

    if (lastConductorMeasure > myPagesArray[myPage] - 1) {
      goToMeasure(firstConductorMeasure)
      return
    }
    goToMeasure(myPagesArray[myPage - 1])
  }

  function handleChangeStartingMeasure(measureNumber: number) {
    setStartingMeasure(measureNumber)
    goToMeasure(measureNumber, true)
  }

  return (
    <>
      {isLoading && <Loader />}
      {showRerender && <RerenderButton onClick={rerenderScore} />}
      {isOwner && (
        <ScoreNavigation
          onGoToBeggining={goToBeggining}
          onGoToNextPage={goToNextPage}
          onChangeStartingMeasure={(m) => handleChangeStartingMeasure(m)}
          lastMeasureNumber={score?.Sheet.LastMeasureNumber}
        />
      )}
      <div ref={divRef} />
    </>
  )
}
