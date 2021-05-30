/** @jsxImportSource @emotion/react */
import { useCreateRoom } from 'api/rooms'
import { Button } from 'components/button'
import { Input } from 'components/form'
import { Title } from 'components/layout'
import { useAuthContext } from 'context/authContext'
import { CreateRoomRequest, RoomListResponse } from 'models'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { emitRoomCreated } from 'sockets/rooms'
import 'twin.macro'

export const CreateRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRoomRequest>()
  const { user, setData } = useAuthContext()
  const history = useHistory()

  const onSuccess = useCallback(
    ({ _id, name }: RoomListResponse) => {
      if (!user) {
        return
      }

      emitRoomCreated(user.id)
      history.push('/lobby/' + _id)
      setData({ ...user, ownedRoom: { _id, name } })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  )

  const { create, isError } = useCreateRoom(onSuccess)
  const onSubmit = handleSubmit((room) => create(room))

  if (!user || user.ownedRoom) {
    history.push('/')
    return null
  }

  return (
    <div tw="grid gap-4 m-auto mt-6 p-4 max-w-lg">
      <Title>Create concert</Title>

      <form onSubmit={onSubmit} tw="grid gap-4">
        <Input label="Concert name" {...register('name', { required: true })} />
        <Button type="submit" tw="m-auto mt-4">
          Create concert
        </Button>
        {errors.name && <span>{errors.name.message}</span>}
      </form>
      <hr />
      {isError && <span>Something whent wrong!</span>}
    </div>
  )
}
