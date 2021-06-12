import config from 'config/config'
import { Server as HttpServer } from 'http'
import Suite from 'models/suite'
import { Server, Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { getLastValue } from 'utils/utils'
import Room from './../models/room'

export default function (httpServer: HttpServer): void {
  const io = new Server(httpServer, {
    cors: {
      origin: config.client,
    },
  })

  const onConnection = (socket: Socket<DefaultEventsMap, DefaultEventsMap>) => {
    registerRoomsHandlers(io, socket)
    console.log(`Connected: ${socket.id}`)
    socket.on('disconnect', () => console.log(`Disconnected: ${socket.id}`))
  }

  io.on('connection', onConnection)

  const registerRoomsHandlers = (
    io: Server<DefaultEventsMap, DefaultEventsMap>,
    socket: Socket<DefaultEventsMap, DefaultEventsMap>
  ) => {
    const handleRoomCreated = async ({ userId }: { userId: string }) => {
      // TODO: passing userId in socket header?
      if (!userId) return

      // rooms are named by owner's userId
      socket.join(userId)

      // emit new rooms list
      const rooms = await Room.find()
      io.emit('rooms:list', null, [...rooms])
    }

    const handleConcertJoin = async (roomId: string) => {
      socket.join(roomId)
    }

    const handleConcertSuite = async ({ roomId, suiteId }: { roomId: string; suiteId: string }) =>
      // callback: (info: string) => void
      {
        const suite = await Suite.findById(suiteId)
        if (!suite) return
        // TODO: is user authorized for this suite
        await Room.findByIdAndUpdate(roomId, { currentSuiteId: suiteId })

        // no broadcast because conductor also need to change suite
        // TODO: is there a way to change for conductor earlier?
        io.to(roomId).emit('concert:suite')
      }

    const handleConcertPage = (values: {
      conductorCurrentPage: number
      conductorPages: number[]
    }) => {
      const roomId = getLastValue(socket.rooms)
      if (!roomId) return
      socket.to(roomId).emit('concert:location', values)
    }

    const handleConcertStartingMeasure = (measureNumber: number) => {
      const roomId = getLastValue(socket.rooms)
      if (!roomId) return
      socket.to(roomId).emit('concert:location', { startingMeasure: measureNumber })
    }

    socket.on('rooms:created', handleRoomCreated)
    socket.on('concert:join', handleConcertJoin)
    socket.on('concert:suite', handleConcertSuite)
    socket.on('concert:location', handleConcertPage)
    socket.on('concert:startingMeasure', handleConcertStartingMeasure)
  }
}
