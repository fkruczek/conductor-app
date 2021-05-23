import { RoomListResponse } from 'models'
import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'

if (!process.env.REACT_APP_API_URL) {
  throw new Error('REACT_APP_API_URL is undefined!!!')
}

let socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null

const initSocket = () => {
  if (!process.env.REACT_APP_API_URL) {
    throw new Error('REACT_APP_API_URL is undefined!!!')
  }
  if (socket) return // TODO: for sure?
  socket = io(process.env.REACT_APP_API_URL)
  socket.on('connect', () => {
    console.log('Socket successfully connected.')
  })
  // if (socket && room) socket.emit('join', room)
}

initSocket()

export const emitRoomCreated = (userId: string) => {
  if (!socket) return
  socket.emit('rooms:created', { userId })
}

// export const disconnectSocket = () => {
//   console.log('Disconnecting socket...')
//   if (socket) socket.disconnect()
// }

export const unsubscribeToRoomsList = () => {
  if (!socket) return
  socket.off('rooms')
}

// TODO: unsubscribing not only disconnect
// TODO: do sth with that error?
type RoomListCallback = (error: null, rooms: RoomListResponse[]) => void

export const subscribeToRoomsList = (cb: RoomListCallback) => {
  if (!socket) return true // TODO: why return true???

  socket.on('rooms:list', (rooms: RoomListResponse[]) => {
    return cb(null, rooms) // TODO: why not cb(msg)???
  })

  return
}

type ConductorPageChangeEvent = { conductorCurrentPage: number; conductorPages: number[] }

export const subscribeToRoomConcert = (
  roomId: string,
  {
    onConductorPageChange,
    onSuiteChange,
  }: {
    onSuiteChange: () => void
    onConductorPageChange: (error: null, value: ConductorPageChangeEvent) => void
  }
) => {
  if (!socket) return true
  socket.emit('concert:join', roomId)

  socket.on('concert:suite', () => {
    return onSuiteChange()
  })

  socket.on('concert:page', (value: ConductorPageChangeEvent) => {
    return onConductorPageChange(null, value)
  })

  return
}

export const emitSuiteChange = (roomId: string, suiteId: string) => {
  // TODO: for sure throw  error?
  if (!socket) throw new Error('Socket is not initiated')
  socket.emit('concert:suite', { suiteId, roomId })
}

export const emitConductorPageChange = (value: ConductorPageChangeEvent) => {
  // TODO: for sure throw  error?
  if (!socket) throw new Error('Socket is not initiated')
  socket.emit('concert:page', value)
}

export const emitConductorStartingMeasure = (measureNumber: number) => {
  // TODO: for sure throw  error?
  if (!socket) throw new Error('Socket is not initiated')
  socket.emit('concert:startingMeasure', measureNumber)
}

export const unsubscribeToRoomConcert = (roomId: string) => {
  if (!socket) return
  socket.off('concert:measure')
  socket.off('concert:suite')
  socket.off('concert:page')
  socket.emit('concert:leave', roomId)
  // TODO: include here concert:suite, concert:measure??
}
