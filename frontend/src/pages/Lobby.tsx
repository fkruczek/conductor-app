/** @jsxImportSource @emotion/react */
// import { useForm } from 'react-hook-form'
import { useRoomLobby } from 'api/rooms'
import { Button } from 'components/button'
import { Select } from 'components/form'
import { Title } from 'components/layout'
import { RoomLobbyFormValue, RoomLobbyResponse } from 'models'
import React, { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { FaTrash } from 'react-icons/fa'
import { useHistory, useParams } from 'react-router-dom'
import 'twin.macro'

// TODO: https://react-hook-form.com/advanced-usage/#SmartFormComponent
// TODO: autoselect parts on reconnect from localstorage
const LobbyForm = ({ data: { name, suites, isOwner } }: { data: RoomLobbyResponse }) => {
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
    // const fromls = localStorage.getItem('partsChoice')
    // if (!fromls) return
    // const map = new Map(JSON.parse(fromls))
  })

  return (
    <form tw="grid gap-4 m-auto p-4 max-w-lg" onSubmit={onSubmit}>
      <Title>Lobby</Title>
      <span>You are in room: {name}</span>
      {fields.map((field, index) => (
        <Select
          key={field.id}
          {...register(`parts.${index}._id` as const, { required: true })}
          options={suites[index].parts}
          label={suites[index].name}
        />
      ))}
      <div tw="m-auto grid gap-4 grid-flow-col">
        {isOwner && (
          <Button tw="m-auto mt-4 bg-red-900 grid grid-flow-col gap-2 items-center" type="submit">
            <FaTrash />
            Delete concert
          </Button>
        )}
        <Button tw="m-auto mt-4" type="submit">
          Ready
        </Button>
      </div>
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

  if (error) return null

  return <div tw="min-h-screen">{data ? <LobbyForm data={data} /> : null}</div>
}
