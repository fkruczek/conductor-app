import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'

let socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null

export const initSocket = () => {
  if (!process.env.REACT_APP_API_URL) {
    throw new Error('REACT_APP_API_URL is undefined!!!')
  }
  if (socket) return
  socket = io(process.env.REACT_APP_API_URL)
  socket.on('connect', () => {
    console.log('Socket successfully connected.')
  })
}

export const getSocket = () => socket
