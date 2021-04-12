/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React, { useEffect, useState } from 'react'
import { RoomResponse } from 'models'
import { unsubscribeToRoomsList, subscribeToRoomsList, initSocket } from '../sockets/index'
import { Link } from 'react-router-dom'
import { Button } from 'components'
import { MainSection } from 'components/roomsList'

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
    <div tw="bg-gradient-to-b from-primary to-white min-h-screen grid content-start">
      <div tw="grid m-auto p-4 max-w-lg mt-10 justify-items-center">
        <MainSection />
        <h1 tw="text-4xl">{rooms.length ? 'Concerts:' : 'Currently no concerts :c'}</h1>
        {rooms.map(({ id, name }) => (
          <Link to={`lobby/${id}`} key={id}>
            <Button>{name}</Button>
          </Link>
        ))}
      </div>
    </div>
  )
}
