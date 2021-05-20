/** @jsxImportSource @emotion/react */
import { Button } from 'components/buttonr'
import React from 'react'
import tw from 'twin.macro'

interface ScoreNavigationButtonsProps {
  onGoToBeggining: () => void
  onGoToNextPage: () => void
}

const StyledScoreNavigationButton = tw.button`fixed top-1/2 place-items-center opacity-60 m-4 z-30 w-10 p-10 h-10 rounded-full`

export const ScoreNavigationButtons = ({
  onGoToBeggining,
  onGoToNextPage,
}: ScoreNavigationButtonsProps) => {
  return (
    <>
      <StyledScoreNavigationButton
        tw="left-0"
        onClick={onGoToBeggining}
      ></StyledScoreNavigationButton>
      <StyledScoreNavigationButton
        tw="right-0"
        onClick={onGoToNextPage}
      ></StyledScoreNavigationButton>
    </>
  )
}

interface Props {
  onClick: () => void
}

export const RerenderButton = ({ onClick }: Props) => {
  return (
    <div tw="w-full fixed bottom-0 flex justify-center z-30">
      <Button tw="m-4" variant="primary" onClick={onClick}>
        Rerender
      </Button>
    </div>
  )
}
