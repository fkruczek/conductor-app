import { RoomConcertResponse, RoomListResponse, RoomLobbyResponse, ScoreLocation } from 'models'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { emitSuiteChange, subscribeToConcert, unsubscribeToRoomConcert } from 'sockets/concert'
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

const createRoom = (room: CreateRoomRequest, onSuccess: (res: RoomListResponse) => void) =>
  api.post('rooms', room).then(({ data }) => {
    onSuccess(data)
    return data
  })

const useCreateRoom = (onSuccess: (res: RoomListResponse) => void) => {
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
  const history = useHistory()
  const { current: parts } = useRef(localStorage.getItem('partsChoice'))

  const { id } = useParams<{ id: string }>()
  const { run, data } = useAsync<RoomConcertResponse | undefined>(undefined)

  const [conductorLocation, setConductorLocation] = useState<ScoreLocation>({
    conductorCurrentPage: 0,
    conductorPages: [],
  })

  useEffect(() => {
    subscribeToConcert(id, {
      onSuiteChange: () => run(getRoomConcert(id, parts)),
      onConductorPageChange: (_: null, conductorLocation: ScoreLocation) => {
        setConductorLocation(conductorLocation)
      },
    })
    return () => {
      unsubscribeToRoomConcert(id)
    }
  }, [id, parts, run])

  useEffect(() => {
    if (!id) {
      history.push('/')
    }
    if (!parts) {
      history.push('/lobby/' + id)
    }
    run(getRoomConcert(id, parts))
  }, [id, run, parts, history])

  if (!data) return null

  const changeSuite = (suiteId: string) => emitSuiteChange(id, suiteId)

  return { ...data, conductorLocation, changeSuite }
}

const deleteRoom = (onSuccess: () => void) => {
  return api.delete('rooms').then(({ data }) => {
    onSuccess()
    return data
  })
}

const useDeleteRoom = (onSuccess: () => void) => {
  const { run, ...rest } = useAsync<void>(undefined)

  const runDeleteRoom = useCallback(() => run(deleteRoom(onSuccess)), [onSuccess, run])

  return { runDeleteRoom, ...rest }
}

export { useRooms, useCreateRoom, useRoomLobby, useRoomConcert, useDeleteRoom }
