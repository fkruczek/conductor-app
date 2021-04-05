/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React, { useEffect, useState } from 'react'
import { RoomResponse } from 'src/models'
import { disconnectSocket, initiateSocket, subscribeToRoomsList } from '../sockets/index'

export const RoomsList = () => {
  const [rooms, setRooms] = useState<RoomResponse[]>([])

  useEffect(() => {
    initiateSocket()
    subscribeToRoomsList((err, rooms: RoomResponse[]) => {
      if (err) return
      setRooms(rooms)
    })
    return () => {
      disconnectSocket()
    }
  }, [])

  return (
    <div tw="bg-gradient-to-b from-electric to-ribbon min-h-screen">
      <div tw="justify-items-center grid gap-4 m-auto p-4 max-w-lg font-mono">
        <h1 tw="text-5xl font-serif text-green-100">Concerts: </h1>
        {rooms.map(({ id, name }) => (
          <button
            tw="w-full h-10 rounded-xl text-base bg-gradient-to-b from-yellow-400 to-pink-600 focus:outline-none hocus:(bg-gradient-to-b from-green-500 to-indigo-600 text-lg text-yellow-100) shadow-xl"
            key={id}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  )
}
