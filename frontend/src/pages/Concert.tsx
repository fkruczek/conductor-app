/** @jsxImportSource @emotion/react */
// import { useForm } from 'react-hook-form'
import { useRoomConcert } from 'api/rooms'
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
      tw="absolute top-2 left-2 text-lg opacity-60 hocus:opacity-100 focus:outline-none transform duration-300"
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
  console.log('render concert')
  if (!roomData) return null
  const { measure, isOwner, score, suites, changeSuite } = roomData
  return (
    <div tw="bg-gradient-to-b min-h-screen">
      {score} {measure}
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
