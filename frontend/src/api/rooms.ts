import { RoomResponse } from 'models'
import { useCallback, useEffect } from 'react'
import { api } from 'utils/apiClient'
import { useAsync } from 'utils/useAsync'
import { CreateRoomRequest } from './../models/index'

const getRooms = () => {
  return api.get<RoomResponse[]>('rooms').then(({ data }) => data)
}

const useRooms = () => {
  const { run, ...rest } = useAsync<RoomResponse[]>([])

  useEffect(() => {
    run(getRooms())
  }, [run])

  return rest
}

const createRoom = (room: CreateRoomRequest, onSuccess: () => void) =>
  api.post('rooms', room).then((res) => {
    onSuccess()
    return res.data
  })

const useCreateRoom = (onSuccess: () => void) => {
  const { run, ...rest } = useAsync<void>(undefined)

  const create = useCallback((room: CreateRoomRequest) => run(createRoom(room, onSuccess)), [run])

  return { create, ...rest }
}

export { useRooms, useCreateRoom }
