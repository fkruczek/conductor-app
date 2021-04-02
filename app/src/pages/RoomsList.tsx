import React, { useEffect, useState } from 'react'
import { disconnectSocket, initiateSocket, subscribeToRoomsList } from '../sockets/index'

export const RoomsList = () => {
  const [rooms, setRooms] = useState<unknown[]>([])

  useEffect(() => {
    initiateSocket()
    subscribeToRoomsList((err, rooms) => {
      if (err) return
      console.log(rooms)
      setRooms(rooms)
    })
    return () => {
      disconnectSocket()
    }
  }, [])

  return <div>rooms</div>
}
