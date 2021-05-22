/** @jsxImportSource @emotion/react */
import { Button } from 'components/button'
import React, { useCallback, useEffect } from 'react'
import { GrCaretNext, GrChapterPrevious } from 'react-icons/gr'
import { MdRefresh } from 'react-icons/md'
import tw from 'twin.macro'

interface ScoreNavigationProps {
  onGoToBeggining: () => void
  onGoToNextPage: () => void
}

const StyledScoreNavigationButton = tw.button`fixed top-1/2 place-items-center opacity-30 m-4 z-30 rounded-full w-20 h-20 flex justify-center border-none bg-gray-500`

export const ScoreNavigation = ({ onGoToBeggining, onGoToNextPage }: ScoreNavigationProps) => {
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
    </div>
  )
}

interface Props {
  onClick: () => void
}

export const RerenderButton = ({ onClick }: Props) => {
  return (
    <div tw="w-full fixed bottom-0 flex justify-center z-30">
      <Button tw="m-4 grid grid-flow-col gap-1 items-center text-white" onClick={onClick}>
        <MdRefresh tw="text-2xl" />
        Rerender
      </Button>
    </div>
  )
}
