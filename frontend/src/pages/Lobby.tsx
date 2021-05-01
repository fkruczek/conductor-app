/** @jsxImportSource @emotion/react */
// import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import 'twin.macro'
// import { RoomRequest } from 'src/models'
// import { initSocket, createRoom } from 'src/sockets'

export const Lobby = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div tw="bg-gradient-to-b from-primary to-yellow-200 min-h-screen">
      <div tw="justify-items-center grid gap-4 m-auto p-4 max-w-lg font-mono">
        <h1>Lobby</h1>
        <span>You are in room: {id}</span>
        {/* <form onSubmit={onSubmit}>
          <label htmlFor="name">Concert name</label>
          <input id="name" {...register('name')} />
          <button type="submit">Create room</button>
          {errors.name && <span>{errors.name.message}</span>}
        </form> */}
      </div>
    </div>
  )
}
