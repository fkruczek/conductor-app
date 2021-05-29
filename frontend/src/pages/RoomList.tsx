/** @jsxImportSource @emotion/react */
import { useRooms } from 'api/rooms'
import { FullPageSpinner, LinkButton } from 'components'
import { Title } from 'components/layout'
import { MainSection } from 'components/roomsList'
import { RoomListResponse } from 'models'
import React, { useEffect } from 'react'
import 'twin.macro'
import { subscribeToRoomsList, unsubscribeToRoomsList } from '../sockets/rooms'

export const RoomList = () => {
  const { data: rooms, setData: setRooms } = useRooms()
  useEffect(() => {
    subscribeToRoomsList((rooms: RoomListResponse[]) => {
      setRooms(rooms)
    })
    return () => {
      unsubscribeToRoomsList()
    }
  }, [setRooms])
  if (!rooms) return <FullPageSpinner />

  return (
    <div tw="bg-gradient-to-b from-background to-primary grid content-start h-min-h-navscreen">
      <div tw="grid m-auto p-4 max-w-lg mt-10 justify-items-center gap-2">
        <MainSection />
        <Title>{rooms.length ? 'Concerts:' : 'Currently no concerts...'}</Title>
        {rooms.map(({ _id, name }) => (
          <LinkButton to={`lobby/${_id}`} key={_id} tw="bg-button text-base">
            {name}
          </LinkButton>
        ))}
      </div>
    </div>
  )
}
