/** @jsxImportSource @emotion/react */
import { useCreateRoom } from 'api/rooms'
import { useAuthContext } from 'context/auth.context'
import { CreateRoomRequest } from 'models'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { emitRoomCreated } from 'sockets'
import 'twin.macro'

export const CreateRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRoomRequest>()
  const { user } = useAuthContext()
  const history = useHistory()

  const onSuccess = useCallback(
    (roomId: string) => {
      if (!user) {
        return
      }
      emitRoomCreated(user._id)
      history.push('/lobby/' + roomId)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  )

  const { create, isError } = useCreateRoom(onSuccess)
  const onSubmit = handleSubmit((room) => create(room))

  if (!user) return null

  return (
    <div tw="justify-items-center grid gap-4 m-auto p-4 max-w-lg">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Concert name: </label>
        <input id="name" {...register('name')} />
        <button type="submit">Create room</button>
        {errors.name && <span>{errors.name.message}</span>}
      </form>
      <hr />
      {isError && <span>Something whent wrong!</span>}
      <Link to="/" tw="bg-white p-4 m-auto hocus:bg-gray-200">
        Concerts list
      </Link>
    </div>
  )
}
