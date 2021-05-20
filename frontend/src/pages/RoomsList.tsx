/** @jsxImportSource @emotion/react */
import { useRooms } from 'api/rooms'
import { Button, FullPageSpinner } from 'components'
import { MainSection } from 'components/roomsList'
import { RoomListResponse } from 'models'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'twin.macro'
import { subscribeToRoomsList, unsubscribeToRoomsList } from '../sockets/index'

export const RoomsList = () => {
  const { data: rooms, setData: setRooms } = useRooms()
  useEffect(() => {
    subscribeToRoomsList((err, rooms: RoomListResponse[]) => {
      if (err) return
      setRooms(rooms)
    })
    return () => {
      unsubscribeToRoomsList()
    }
  }, [setRooms])
  if (!rooms) return <FullPageSpinner />

  return (
    <div tw="bg-gradient-to-b from-primary to-white min-h-screen grid content-start">
      <div tw="grid m-auto p-4 max-w-lg mt-10 justify-items-center gap-2">
        <MainSection />
        <h1 tw="text-4xl">{rooms.length ? 'Concerts:' : 'Currently no concerts...'}</h1>
        {rooms.map(({ _id, name }) => (
          <Link to={`lobby/${_id}`} key={_id}>
            <Button>{name}</Button>
          </Link>
        ))}
      </div>
    </div>
  )
}
