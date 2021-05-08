/** @jsxImportSource @emotion/react */
// import { useForm } from 'react-hook-form'
import { useRoomConcert } from 'api/rooms'
import { OptionType } from 'models'
import React from 'react'
import { useParams } from 'react-router-dom'
import 'twin.macro'

// import { RoomRequest } from 'src/models'
// import { initSocket, createRoom } from 'src/sockets'

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
  const { id } = useParams<{ id: string }>()

  const parts = localStorage.getItem('partsChoice')
  // const map = new Map(JSON.parse(fromls))
  const { data } = useRoomConcert(id, parts)
  // if !partChoice in localStorage then redirect to lobby
  if (!data) return null
  return (
    <div tw="bg-gradient-to-b min-h-screen">
      {data.score}
      <SuiteSelect
        options={data.suites}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => console.log(e.target.value)}
      />
    </div>
  )
}
