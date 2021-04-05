import { Socket, Server } from 'socket.io'
import { Server as HttpServer } from 'http'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

interface CreateRoomRequest {
  name: string
}

interface RoomResponse {
  id: string
  name: string
}

const rooms: RoomResponse[] = [
  { id: '1', name: 'Some concert' },
  { id: '3', name: 'Some secod concert' },
  { id: '2', name: 'Some thirdconcert' },
  { id: '4', name: 'Some other concert' },
]

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
    console.log(socket.id, ' connected')
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

  // TODO: maybe remove this "io" from here
  const registerRoomsHandlers = (
    _: Server<DefaultEventsMap, DefaultEventsMap>,
    socket: Socket<DefaultEventsMap, DefaultEventsMap>
  ) => {
    const createRoom = ({ name }: CreateRoomRequest) => {
      rooms.push({ id: rooms.length.toString(), name })
      emitRooms()
    }

    const emitRooms = () => {
      socket.emit('rooms', rooms)
    }

    const getRooms = (cb: (rooms: RoomResponse[]) => void) => {
      cb(rooms)
    }

    socket.on('rooms:create', createRoom)
    socket.on('rooms:getAll', getRooms)
  }
}
