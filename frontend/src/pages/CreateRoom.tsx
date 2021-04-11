/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { RoomRequest } from 'models'
import { initSocket, createRoom } from 'sockets'

export const CreateRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomRequest>()

  const onSubmit = handleSubmit((room) => createRoom(room))

  useEffect(() => {
    initSocket()
  }, [])

  return (
    <div tw="justify-items-center grid gap-4 m-auto p-4 max-w-lg font-mono">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Concert name</label>
        <input id="name" {...register('name')} />
        <button type="submit">Create room</button>
        {errors.name && <span>{errors.name.message}</span>}
      </form>
      <hr />
      <Link to="/" tw="bg-white p-4 m-auto hocus:bg-gray-200">
        Concerts list
      </Link>
    </div>
  )
}
