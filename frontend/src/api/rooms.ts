import { RoomConcertResponse, RoomListResponse, RoomLobbyResponse, ScoreLocation } from 'models'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { emitSuiteChange, subscribeToRoomConcert, unsubscribeToRoomConcert } from 'sockets'
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

const useRoomConcert = () => {
  const parts = localStorage.getItem('partsChoice')
  // TODO: if !partChoice in localStorage then redirect to lobby

  const { id } = useParams<{ id: string }>()
  const { run, data } = useAsync<RoomConcertResponse | undefined>(undefined)

  const [conductorLocation, setConductorLocation] = useState<ScoreLocation>({
    conductorCurrentPage: 0,
    conductorPages: [],
  })
  useEffect(() => {
    subscribeToRoomConcert(id, {
      onSuiteChange: () => run(getRoomConcert(id, parts)),
      onConductorPageChange: (_, conductorLocation) => {
        setConductorLocation(conductorLocation)
      },
    })
    return () => {
      unsubscribeToRoomConcert(id)
    }
  }, [id, parts, run])

  useEffect(() => {
    run(getRoomConcert(id, parts))
  }, [id, run, parts])

  if (!data) return null

  // TODO: is this a good pattern?
  const changeSuite = (suiteId: string) => emitSuiteChange(id, suiteId)

  return { ...data, conductorLocation, changeSuite }
}

export { useRooms, useCreateRoom, useRoomLobby, useRoomConcert }
