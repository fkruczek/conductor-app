/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React, { useEffect, useState } from 'react'
import { RoomResponse } from 'models'
import { unsubscribeToRoomsList, subscribeToRoomsList, initSocket } from '../sockets/index'
import { Link } from 'react-router-dom'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { Button } from 'components'

if (!process.env.REACT_APP_GOOGLE_CLIENT_ID) {
  throw new Error('REACT_APP_GOOGLE_CLIENT_ID is undefined!!!')
}
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string

const handleLoginSuccess = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  console.log('login')
  if (!('tokenId' in response)) return handleLoginFailure()
  // TODO: store token in localstorage??
  console.log(response.tokenId)
  const res = await fetch('http://localhost:3001/api/auth/google', {
    method: 'POST',
    body: JSON.stringify({
      token: response.tokenId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => res.json())

  console.log(res)
}

const handleLoginFailure = async () => {
  // TODO: maybe clear auth context here?
  console.log('login failure')
}

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
      <div tw="grid m-auto p-4 max-w-lg mt-10">
        <GoogleLogin
          clientId={googleClientId}
          buttonText="Log in with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          tw="w-48 m-auto"
        />
        {/* <Link to="/create-concert">
          <Button>Create concert</Button>
        </Link> */}
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
