import { Server as HttpServer } from 'http'
import { Server, Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import Room from './../models/room'

export default function (httpServer: HttpServer): void {
  const io = new Server(httpServer, {
    // TODO: options (cors etc...)
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      allowedHeaders: ['my-custom-header'],
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

      // rooms are named by owner's  userId
      socket.join(userId)

      // emit new rooms list
      const rooms = await Room.find()
      io.emit('rooms:list', [...rooms])
    }

    socket.on('rooms:created', handleRoomCreated)
  }
}
