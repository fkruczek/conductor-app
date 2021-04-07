/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React, { useEffect, useState } from 'react'
import { RoomResponse } from 'src/models'
import { unsubscribeToRoomsList, subscribeToRoomsList, initSocket } from '../sockets/index'
import { Link } from 'react-router-dom'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'

const handleLogin = async (googleData: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  // const res = await fetch('http://localhost:3001/api/auth/google', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     token: googleData.code,
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  // const data = await res.json()
  // console.log(data)
  // store returned user somehow
  console.log(googleData)
}
if (!process.env.REACT_APP_GOOGLE_CLIENT_ID) {
  throw new Error('REACT_APP_GOOGLE_CLIENT_ID is undefined!!!')
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
    <div tw="bg-gradient-to-b from-electric to-ribbon min-h-screen">
      <div tw="justify-items-center grid gap-4 m-auto p-4 max-w-lg font-mono">
        <h1 tw="text-5xl font-serif text-green-100">Concerts: </h1>
        {rooms.map(({ id, name }) => (
          <Link to={`lobby/${id}`} key={id}>
            <button tw="w-full h-10 text-base bg-gradient-to-b from-yellow-400 to-pink-600 focus:outline-none hocus:(bg-gradient-to-b from-green-500 to-indigo-600 text-lg text-yellow-100) shadow-xl">
              {name}
            </button>
          </Link>
        ))}
        <hr />
        <Link to="/create-concert" tw="bg-white p-4 m-auto hocus:bg-gray-200">
          Create concert
        </Link>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}
