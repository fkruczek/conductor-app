/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React, { useEffect, useState } from 'react'
import { RoomResponse } from 'src/models'
import { unsubscribeToRoomsList, subscribeToRoomsList, initSocket } from '../sockets/index'
import { Link } from 'react-router-dom'

export const RoomsList = () => {
  const [rooms, setRooms] = useState<RoomResponse[]>([])

  useEffect(() => {
    initSocket()
    subscribeToRoomsList((err, rooms: RoomResponse[]) => {
      if (err) return
      setRooms(rooms)
    })
    return () => {
      unsubscribeToRoomsList()
    }
  }, [])

  return (
    <div tw="bg-gradient-to-b from-electric to-ribbon min-h-screen">
      <div tw="justify-items-center grid gap-4 m-auto p-4 max-w-lg font-mono">
        <h1 tw="text-5xl font-serif text-green-100">Concerts: </h1>
        {rooms.map(({ id, name }) => (
          <button
            tw="w-full h-10 text-base bg-gradient-to-b from-yellow-400 to-pink-600 focus:outline-none hocus:(bg-gradient-to-b from-green-500 to-indigo-600 text-lg text-yellow-100) shadow-xl"
            key={id}
          >
            {name}
          </button>
        ))}
        <hr />
        <Link to="/create-concert" tw="bg-white p-4 m-auto hocus:bg-gray-200">
          Create concert
        </Link>
      </div>
    </div>
  )
}
