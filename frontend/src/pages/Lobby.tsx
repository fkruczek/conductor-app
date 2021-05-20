/** @jsxImportSource @emotion/react */
// import { useForm } from 'react-hook-form'
import { useRoomLobby } from 'api/rooms'
import { Button } from 'components/buttonr'
import { Select } from 'components/form'
import { RoomLobbyFormValue, RoomLobbyResponse } from 'models'
import React, { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import 'twin.macro'

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
    // const fromls = localStorage.getItem('partsChoice')
    // if (!fromls) return
    // const map = new Map(JSON.parse(fromls))
  })

  return (
    <form tw="justify-items-center grid gap-4 m-auto p-4 max-w-lg" onSubmit={onSubmit}>
      <h1>Lobby</h1>
      <span>You are in room: {name}</span>
      {fields.map((field, index) => (
        <Select
          key={field.id}
          {...register(`parts.${index}._id` as const, { required: true })}
          options={suites[index].parts}
          label={suites[index].name}
        />
      ))}
      <Button type="submit">Ready</Button>
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

  return (
    <div tw="bg-gradient-to-b from-primary to-yellow-200 min-h-screen">
      {data ? <LobbyForm data={data} /> : null}
    </div>
  )
}
