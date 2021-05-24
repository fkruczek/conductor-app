/** @jsxImportSource @emotion/react */
import { Button } from 'components/button'
import { TransparentSelect } from 'components/controls'
import { SwitchMode } from 'models'
import React, { useCallback, useEffect } from 'react'
import { GrCaretNext, GrChapterPrevious } from 'react-icons/gr'
import { MdRefresh } from 'react-icons/md'
import tw from 'twin.macro'

interface ScoreNavigationProps {
  lastMeasureNumber?: number
  onGoToBeggining: () => void
  onGoToNextPage: () => void
  onChangeStartingMeasure: (measureNumber: number) => void
}

const StyledScoreNavigationButton = tw.button`fixed top-1/2 place-items-center opacity-30 m-4 z-30 rounded-full w-20 h-20 flex justify-center border-none bg-gray-500`

export const ScoreNavigation = ({
  onGoToBeggining,
  onGoToNextPage,
  lastMeasureNumber,
  onChangeStartingMeasure,
}: ScoreNavigationProps) => {
  console.log(lastMeasureNumber)
  const handleKeyDown = useCallback(
    ({ code }: KeyboardEvent) => {
      if (['ArrowRight'].includes(code)) {
        onGoToNextPage()
      }
      if (['ArrowLeft'].includes(code)) {
        onGoToBeggining()
      }
    },
    [onGoToBeggining, onGoToNextPage]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const measureOptions = Array.from(Array(lastMeasureNumber))
    .map((_, index) => ({
      _id: index + '',
      name: index + '',
    }))
    .splice(1)

  return (
    <div>
      <StyledScoreNavigationButton
        tw="left-0 text-3xl grid justify-items-center items-center"
        onClick={onGoToBeggining}
      >
        <GrChapterPrevious />
      </StyledScoreNavigationButton>
      <StyledScoreNavigationButton tw="right-0 text-4xl" onClick={onGoToNextPage}>
        <GrCaretNext tw="ml-2" />
      </StyledScoreNavigationButton>
      {lastMeasureNumber && (
        <TransparentSelect
          options={measureOptions}
          tw="bottom-2 right-2 z-30 w-20"
          onChange={(e) => onChangeStartingMeasure(+e.target.value)}
        />
      )}
    </div>
  )
}

interface RerenderButtonProps {
  onClick: () => void
}

export const RerenderButton = ({ onClick }: RerenderButtonProps) => {
  return (
    <div tw="w-full fixed top-1/2 flex justify-center z-30">
      <Button tw="m-4 grid grid-flow-col gap-1 items-center text-white" onClick={onClick}>
        <MdRefresh tw="text-2xl" />
        Rerender
      </Button>
    </div>
  )
}

interface ModeSwitchProps {
  onModeChange: (m: SwitchMode) => void
}

export const ModeSwitch = ({ onModeChange }: ModeSwitchProps) => {
  return (
    <TransparentSelect
      options={[
        { _id: 'paginated', name: 'Paginated' },
        { _id: 'continuous', name: 'Continuous' },
      ]}
      tw="bottom-2 right-2 z-30 w-32 md:w-40"
      onChange={(e) => onModeChange(e.currentTarget.value as SwitchMode)}
    />
  )
}
