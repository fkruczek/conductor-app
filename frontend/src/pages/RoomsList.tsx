/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React, { useEffect, useState } from 'react'
import { RoomResponse } from 'models'
import { unsubscribeToRoomsList, subscribeToRoomsList, initSocket } from '../sockets/index'
import { Link } from 'react-router-dom'
import GoogleLogin, { GoogleLogout } from 'react-google-login'
import { Button } from 'components'
import { handleLoginFailure, useAuthContext } from 'context/auth.context'

export const RoomsList = () => {
  const [rooms, setRooms] = useState<RoomResponse[]>([])
  const { handleLoginSuccess, handleLogoutSuccess, user } = useAuthContext()

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
        {user ? (
          <Link to="/create-concert">
            <Button>Create concert</Button>
          </Link>
        ) : (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
            buttonText="Log in with Google"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            tw="w-48 m-auto"
          />
        )}
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
