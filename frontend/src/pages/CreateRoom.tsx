/** @jsxImportSource @emotion/react */
import { useCreateRoom } from 'api/rooms'
import { useAuthContext } from 'context/auth.context'
import { CreateRoomRequest } from 'models'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { emitRoomCreated } from 'sockets'
import 'twin.macro'

export const CreateRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRoomRequest>()
  const { user } = useAuthContext()
  const { create, isError, error } = useCreateRoom(() => emitRoomCreated(user!._id))
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
