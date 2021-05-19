/** @jsxImportSource @emotion/react */
// import { useForm } from 'react-hook-form'
import { useRoomConcert } from 'api/rooms'
import Score from 'components/score/score'
import { OptionType } from 'models'
import React from 'react'
import 'twin.macro'

interface SuiteSelectProps {
  options: OptionType[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => unknown
}

const SuiteSelect = ({ options, onChange }: SuiteSelectProps) => {
  return (
    <select
      onChange={onChange}
      tw="fixed top-2 left-2 text-lg opacity-60 hocus:opacity-100 focus:outline-none transform duration-300"
    >
      {options.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </select>
  )
}

export const Concert = () => {
  const roomData = useRoomConcert()
  if (!roomData) return null
  const { isOwner, score, suites, changeSuite, conductorLocation } = roomData
  return (
    <div tw="bg-gradient-to-b min-h-screen">
      <Score musicXML={score} conductorLocation={conductorLocation} isOwner={isOwner} />
      {isOwner && (
        <>
          <SuiteSelect
            options={suites}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changeSuite(e.target.value)}
          />
        </>
      )}
    </div>
  )
}
