/** @jsxImportSource @emotion/react */
import { Button } from 'components/buttonr'
import { ScoreLocation } from 'models'
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { emitConductorPageChange } from 'sockets'
import 'twin.macro'
import { Loader } from './loader'

interface ScoreProps {
  musicXML: string
  conductorLocation: ScoreLocation
  isOwner: boolean
}
export default function Score({ musicXML, conductorLocation, isOwner }: ScoreProps): ReactElement {
  const [score, setScore] = useState<OpenSheetMusicDisplay>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showRerender, setShowRerender] = useState(false)
  const [myCurrentPage, setMyCurrentPage] = useState(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { conductorCurrentPage, conductorPages } = conductorLocation
    if (!conductorPages.length) return
    handleConductorPageChange(conductorCurrentPage, conductorPages)
    // TODO: make a callback from handle fn
  }, [conductorLocation])

  useEffect(() => {
    window.addEventListener('resize', () => setShowRerender(true))
  }, [])

  useLayoutEffect(() => {
    console.log('1')
    if (!divRef.current) return
    if (score) {
      score.load(musicXML).then(() => {
        setIsLoading(true)
        setTimeout(() => {
          score.render()
          score.cursor.show()
          setIsLoading(false)
        })
      })
      return
    }
    console.log('2')

    const newScore = new OpenSheetMusicDisplay(divRef.current, {
      followCursor: false,
      autoResize: false,
      drawTitle: false,
    })
    console.log('3')
    newScore.load(musicXML).then(() => {
      console.log('4')
      // TODO: maybe put here rerenderScore()
      setTimeout(() => {
        newScore.setPageFormat(`${window.innerWidth}x${window.innerHeight}`)
        newScore.render()
        newScore.cursor.show()
        setScore(newScore)
        setIsLoading(false)
      })
      console.log('5')
    })
    // TODO: make a callback from get fn
    console.log('6')
  }, [musicXML])

  function emitPageChange() {
    emitConductorPageChange({
      conductorCurrentPage: myCurrentPage,
      conductorPages: getMyPagesArray(),
    })
  }

  function goToMeasure(targetMeasure: number) {
    if (isOwner) {
      emitPageChange()
    }
    // in case we want to go back
    score?.cursor.reset()
    while (getCurrentMeasureNumber() < targetMeasure) {
      score?.cursor.next()
    }
    if (targetMeasure === 0) {
      window.scrollTo(0, 0)
      return
    }
    scrollToCursor()
  }

  function scrollToCursor() {
    const diffToBar = score?.cursor.cursorElement.getBoundingClientRect().top ?? 0

    window.scrollBy({
      // TODO: calculate "top" in different way
      top: diffToBar - 40,
      behavior: 'smooth',
    })
  }

  function goToPage(pageNumber: number) {
    const musicPage = score?.GraphicSheet.MusicPages[pageNumber]
    if (musicPage) {
      setMyCurrentPage(pageNumber)
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
    setMyCurrentPage(0)
    goToMeasure(0)
  }

  function goToNextPage() {
    goToPage(myCurrentPage + 1)
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
    setIsLoading(true)
    score.setPageFormat(`${window.innerWidth}x${window.innerHeight}`)
    goToBeggining()
    score.render()
    setShowRerender(false)
    setIsLoading(false)
  }

  function handleConductorPageChange(conductorCurrentPage: number, conductorPages: number[]) {
    let myPage = 0
    const myPagesArray = getMyPagesArray()

    const firstConductorMeasure = conductorPages[conductorCurrentPage + 1]
    const lastConductorMeasure = conductorPages[conductorCurrentPage + 2] - 1 ?? null
    if (!firstConductorMeasure || !lastConductorMeasure) return

    while (firstConductorMeasure >= myPagesArray[myPage]) myPage++

    if (lastConductorMeasure > myPagesArray[myPage] - 1) {
      goToMeasure(firstConductorMeasure)
      return
    }
    goToMeasure(myPagesArray[myPage - 1])
  }

  return (
    <div tw="bg-yellow-50">
      {isLoading && <Loader />}
      {showRerender && (
        <div tw="w-full fixed bottom-0 flex justify-center z-30">
          <Button tw="m-4" variant="primary" onClick={rerenderScore}>
            Rerender
          </Button>
        </div>
      )}
      {isOwner && (
        <>
          <Button tw="fixed bottom-0 left-0 m-4 z-30" variant="primary" onClick={goToBeggining}>
            {'<<'}
          </Button>
          <Button tw="fixed bottom-0 right-0 m-4 z-30" variant="primary" onClick={goToNextPage}>
            {'>>'}
          </Button>
        </>
      )}
      <div ref={divRef} />
    </div>
  )
}
