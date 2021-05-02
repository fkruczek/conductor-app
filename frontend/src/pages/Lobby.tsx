/** @jsxImportSource @emotion/react */
// import { useForm } from 'react-hook-form'
import { Button } from 'components'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import 'twin.macro'

// import { RoomRequest } from 'src/models'
// import { initSocket, createRoom } from 'src/sockets'

export const Lobby = () => {
  const { id } = useParams<{ id: string }>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((values) => console.log(values))

  return (
    <div tw="bg-gradient-to-b from-primary to-yellow-200 min-h-screen">
      <form tw="justify-items-center grid gap-4 m-auto p-4 max-w-lg" onSubmit={onSubmit}>
        <h1>Lobby</h1>
        <span>You are in room: {id}</span>
        <label htmlFor="pet-select">Choose a part:</label>
        <select id="pet-select" {...register('pets', { required: true })}>
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <Button type="submit">Open score</Button>

        {/* <form onSubmit={onSubmit}>
          <label htmlFor="name">Concert name</label>
          <input id="name" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </form> */}
      </form>
    </div>
  )
}
