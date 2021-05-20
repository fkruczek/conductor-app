import { Server as HttpServer } from 'http'
import { Server, Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { getLastValue } from 'utils'
import Room from './../models/room'

export default function (httpServer: HttpServer): void {
  const io = new Server(httpServer, {
    // TODO: options (cors etc...)
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
    },
  })

  const onConnection = (socket: Socket<DefaultEventsMap, DefaultEventsMap>) => {
    registerRoomsHandlers(io, socket)
    console.log(`Connected: ${socket.id}`)
    socket.on('disconnect', () => console.log(`Disconnected: ${socket.id}`))
    // socket.on('join', (room) => {
    //   console.log(`Socket ${socket.id} joining ${room}`)
    //   socket.join(room)
    // })
    // socket.on('chat', (data) => {
    //   const { message, room } = data
    //   console.log(`msg: ${message}, room: ${room}`)
    //   io.to(room).emit('chat', message)
    // })
  }

  io.on('connection', onConnection)

  const registerRoomsHandlers = (
    io: Server<DefaultEventsMap, DefaultEventsMap>,
    socket: Socket<DefaultEventsMap, DefaultEventsMap>
  ) => {
    const handleRoomCreated = async ({ userId }: { userId: string }) => {
      if (!userId) return

      // rooms are named by owner's userId
      socket.join(userId)

      // emit new rooms list
      const rooms = await Room.find()
      io.emit('rooms:list', [...rooms])
    }

    const handleConcertJoin = async (roomId: string) => {
      socket.join(roomId)
    }

    const handleConcertSuite = async ({ roomId, suiteId }: { roomId: string; suiteId: string }) => {
      console.log(suiteId)
      // TODO: validation (room exists? suite exists?)
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
      socket.to(roomId).emit('concert:page', values)
    }

    socket.on('rooms:created', handleRoomCreated)
    socket.on('concert:join', handleConcertJoin)
    socket.on('concert:suite', handleConcertSuite)
    socket.on('concert:page', handleConcertPage)
  }
}
