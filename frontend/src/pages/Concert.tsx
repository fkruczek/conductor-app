/** @jsxImportSource @emotion/react */
// import { useForm } from 'react-hook-form'
import { useRoomConcert } from 'api/rooms'
import { ScoreSelect } from 'components/controls'
import Score from 'components/score/score'
import React from 'react'
import 'twin.macro'

export const Concert = () => {
  const roomData = useRoomConcert()
  if (!roomData) return null
  const { isOwner, score, suites, changeSuite, conductorLocation } = roomData
  return (
    <div tw="min-h-screen">
      <Score musicXML={score} conductorLocation={conductorLocation} isOwner={isOwner} />
      {isOwner && (
        <ScoreSelect
          tw="top-2 right-2"
          options={suites}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changeSuite(e.target.value)}
        />
      )}
    </div>
  )
}
