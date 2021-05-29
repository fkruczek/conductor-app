import { RoomListResponse } from 'models'
import { logError } from 'utils/socketHelpers'
import { getSocket } from './startup'

const events = {
  list: 'rooms:list',
  created: 'rooms:created',
}

export const subscribeToRoomsList = (cb: (rooms: RoomListResponse[]) => void) => {
  getSocket()?.on(events.list, (err: string | null, rooms: RoomListResponse[]) => {
    if (err) return logError(err)
    return cb(rooms)
  })
}

export const unsubscribeToRoomsList = () => {
  Object.values(events).forEach((event) => getSocket()?.off(event))
}

export const emitRoomCreated = (userId: string) => {
  getSocket()?.emit(events.created, { userId })
}
