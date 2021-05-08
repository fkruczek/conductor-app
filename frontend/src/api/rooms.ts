import { RoomConcertResponse, RoomListResponse, RoomLobbyResponse } from 'models'
import { useCallback, useEffect } from 'react'
import { api } from 'utils/apiClient'
import { useAsync } from 'utils/useAsync'
import { CreateRoomRequest } from './../models/index'

const getRooms = () => {
  return api.get<RoomListResponse[]>('rooms').then(({ data }) => data)
}

const useRooms = () => {
  const { run, ...rest } = useAsync<RoomListResponse[]>([])

  useEffect(() => {
    run(getRooms())
  }, [run])

  return rest
}

const createRoom = (room: CreateRoomRequest, onSuccess: (res: string) => void) =>
  api.post('rooms', room).then(({ data }) => {
    onSuccess(data)
    return data
  })

const useCreateRoom = (onSuccess: (res: string) => void) => {
  const { run, ...rest } = useAsync<void>(undefined)

  const create = useCallback((room: CreateRoomRequest) => run(createRoom(room, onSuccess)), [
    onSuccess,
    run,
  ])

  return { create, ...rest }
}

const getRoomLobby = (id: string) => {
  return api.get<RoomLobbyResponse>('rooms/' + id + '/lobby').then(({ data }) => data)
}

const useRoomLobby = (id: string) => {
  const { run, ...rest } = useAsync<RoomLobbyResponse | undefined>(undefined)

  useEffect(() => {
    run(getRoomLobby(id))
  }, [id, run])
  return rest
}

const getRoomConcert = (id: string, parts: string | null) => {
  return api
    .get<RoomConcertResponse>('rooms/' + id + '/concert', { params: { parts } })
    .then(({ data }) => data)
}

const useRoomConcert = (id: string, parts: string | null) => {
  const { run, ...rest } = useAsync<RoomConcertResponse | undefined>(undefined)

  useEffect(() => {
    run(getRoomConcert(id, parts))
  }, [id, run, parts])
  return rest
}

export { useRooms, useCreateRoom, useRoomLobby, useRoomConcert }
