import { RoomRequest } from './../models/index'
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

import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'
import { RoomResponse } from 'src/models'
let socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null

export const initSocket = () => {
  if (socket) return // TODO: for sure?
  socket = io('http://localhost:3001')
  console.log('Connecting socket...')
  socket.on('connect', () => {
    console.log('Socket successfully connected.')
  })
  // if (socket && room) socket.emit('join', room)
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

type Callback = (whatever: null, rooms: RoomResponse[]) => void

export const subscribeToRoomsList = (cb: Callback) => {
  if (!socket) return true // TODO: why return true???

  socket.on('rooms:list', (rooms: RoomResponse[]) => {
    return cb(null, rooms) // TODO: why not cb(msg)???
  })

  return
}

export const createRoom = (room: RoomRequest) => {
  if (!socket) throw new Error('Socket not initiated')
  socket.emit('rooms:create', room)
}

// export const sendMessage = (room: string, message: string) => {
//   if (socket) socket.emit('chat', { message, room })
// }
