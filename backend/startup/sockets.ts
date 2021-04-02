import { Socket, Server } from 'socket.io'
import { Server as HttpServer } from 'http'
export default function (httpServer: HttpServer): void {
  const io = new Server(httpServer, {
    // TODO: options (cors etc...)
  })
  io.on('connection', (socket: Socket) => {
    console.log(socket)
    socket.on('disconnect', () => console.log(`Disconnected: ${socket.id}`))
    socket.on('join', (room) => {
      console.log(`Socket ${socket.id} joining ${room}`)
      socket.join(room)
    })
    socket.on('chat', (data) => {
      const { message, room } = data
      console.log(`msg: ${message}, room: ${room}`)
      io.to(room).emit('chat', message)
    })
  })

  console.log('Listening to socket connections...')
}
