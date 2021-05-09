// import io, { Socket } from 'socket.io-client'
// import { DefaultEventsMap } from 'socket.io-client/build/typed-events'
// let socket: Socket<DefaultEventsMap, DefaultEventsMap>

// export const initiateSocket = (room: string) => {
//   socket = io('http://localhost:3000')
//   console.log(`Connecting socket...`)
//   if (socket && room) socket.emit('join', room)
// }

// export const disconnectSocket = () => {
//   console.log('Disconnecting socket...')
//   if (socket) socket.disconnect()
// }

// type Callback = (whatever: null, msg: string) => void

// export const subscribeToChat = (cb: Callback) => {
//   if (!socket) return true // TODO: why return true???
//   socket.on('chat', (msg) => {
//     console.log('Websocket event received!')
//     return cb(null, msg) // TODO: why not cb(msg)???
//   })
//   return
// }

// // TODO: unsubscribing

// export const sendMessage = (room: string, message: string) => {
//   if (socket) socket.emit('chat', { message, room })
// }

if (!process.env.REACT_APP_API_URL) {
  throw new Error('REACT_APP_API_URL is undefined!!!')
}

import { RoomListResponse } from 'models'
import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'
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

export const subscribeToRoomConcert = (
  roomId: string,
  {
    onMeasureChange,
    onSuiteChange,
  }: {
    onSuiteChange: () => void
    onMeasureChange: (error: null, measureNumber: number) => void
  }
) => {
  if (!socket) return true
  socket.emit('concert:join', roomId)

  socket.on('concert:suite', () => {
    return onSuiteChange()
  })

  socket.on('concert:measure', (measureNumber: number) => {
    return onMeasureChange(null, measureNumber)
  })

  return
}

export const emitSuiteChange = (roomId: string, suiteId: string) => {
  if (!socket) return true

  socket.emit('concert:suite', { suiteId, roomId })

  return
}

export const unsubscribeToRoomConcert = (roomId: string) => {
  if (!socket) return
  socket.off('concert')
  socket.emit('concert:leave', roomId)
  // TODO: include here concert:suite, concert:measure??
}
