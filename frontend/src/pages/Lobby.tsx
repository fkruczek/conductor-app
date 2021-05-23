/** @jsxImportSource @emotion/react */
// import { useForm } from 'react-hook-form'
import { deleteRoom, useRoomLobby } from 'api/rooms'
import { Button } from 'components/button'
import { Select } from 'components/form'
import { Title } from 'components/layout'
import { useAuthContext } from 'context/authContext'
import { RoomLobbyFormValue, RoomLobbyResponse } from 'models'
import React, { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { FaTrash } from 'react-icons/fa'
import { useHistory, useParams } from 'react-router-dom'
import 'twin.macro'

const LobbyOwnerSection = () => {
  const history = useHistory()
  const { user, setData } = useAuthContext()
  if (!user) return null

  const handleDeleteRoom = () => {
    // TODO: turn on loader

    deleteRoom().then(() => {
      history.push('/')
      setData({ ...user, ownedRoom: null })
    })
  }

  return (
    <div>
      <hr tw="mt-20 mb-5" />
      <span>Delete this concert to create new:</span>
      <Button
        tw="mt-4 bg-red-900 grid grid-flow-col gap-2 items-center"
        type="button"
        onClick={handleDeleteRoom}
      >
        <FaTrash />
        Delete concert
      </Button>
    </div>
  )
}

// TODO: https://react-hook-form.com/advanced-usage/#SmartFormComponent
// TODO: autoselect parts on reconnect from localstorage
const LobbyForm = ({ data: { name, suites } }: { data: RoomLobbyResponse }) => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  const { handleSubmit, register, control } = useForm<RoomLobbyFormValue>({
    defaultValues: { parts: suites.map(() => ({ _id: '' })) },
  })
  const { fields } = useFieldArray({
    control,
    name: 'parts',
  })

  const onSubmit = handleSubmit(({ parts }) => {
    // saving map of selected parts for each suite in localStorage
    const partsChoice = new Map()
    parts.forEach((part, index) => {
      partsChoice.set(suites[index]._id, part._id)
    })
    localStorage.setItem('partsChoice', JSON.stringify(Array.from(partsChoice.entries())))

    history.push('/concert/' + id)
  })

  return (
    <form tw="grid gap-4" onSubmit={onSubmit}>
      <Title>Lobby</Title>
      <span tw="text-4xl italic">Concert: {name}</span>
      <span tw="text-lg">Choose your part for each piece:</span>
      {fields.map((field, index) => (
        <Select
          key={field.id}
          {...register(`parts.${index}._id` as const, { required: true })}
          options={suites[index].parts}
          label={suites[index].name}
        />
      ))}
      <Button tw="m-auto mt-4" type="submit">
        Ready!
      </Button>
    </form>
  )
}

export const Lobby = () => {
  const { id } = useParams<{ id: string }>()

  // TODO: if !id redirect to roomlist
  const { data, error } = useRoomLobby(id)

  useEffect(() => {
    localStorage.setItem('currentRoomId', id)
  }, [id])

  if (error || !data) return null

  return (
    <div tw="p-4 max-w-xl m-auto">
      <LobbyForm data={data} />
      {data.isOwner && <LobbyOwnerSection />}
    </div>
  )
}
