/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'
// import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
// import { RoomRequest } from 'src/models'
// import { initSocket, createRoom } from 'src/sockets'

export const Lobby = () => {
  const { id } = useParams<{ id: string }>()

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<RoomRequest>()

  //   const onSubmit = handleSubmit((room) => createRoom(room))

  //   useEffect(() => {
  //     initSocket()
  //   }, [])

  return (
    <div tw="bg-gradient-to-b from-electric to-ribbon min-h-screen">
      <div tw="justify-items-center grid gap-4 m-auto p-4 max-w-lg font-mono">
        <h1>Lobby</h1>
        <span>You are in room: {id}</span>
        {/* <form onSubmit={onSubmit}>
          <label htmlFor="name">Concert name</label>
          <input id="name" {...register('name')} />
          <button type="submit">Create room</button>
          {errors.name && <span>{errors.name.message}</span>}
        </form> */}
        <hr />
        <Link to="/" tw="bg-white p-4 m-auto hocus:bg-gray-200">
          Concerts list
        </Link>
      </div>
    </div>
  )
}
