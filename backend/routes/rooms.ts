import express from 'express'
import { isAuth } from 'middleware/isAuth'
import mongoose from 'mongoose'
import Room, { RoomDocument, RoomType } from './../models/room'
import { CreateRoomRequest } from './../types/index'
const router = express.Router()

router.get<{ id: string }, RoomDocument | string>('/:id', async (req, res) => {
  // TODO: do not return everything
  const room = await Room.findById(req.params.id)
  if (!room) return res.status(404).send('Room doesnt exists')
  return res.send(room)
})

router.get<void, RoomDocument[]>('/', async (_, res) => {
  // TODO: do not return everything
  const rooms = await Room.find()

  return res.send(rooms)
})

router.post<any, any, CreateRoomRequest>('/', isAuth, async (req, res) => {
  const newRoom: RoomType = {
    name: req.body.name,
    owner: mongoose.Types.ObjectId(req.session.userId),
    suites: ['asdf', 'fsda', 'asasdfasd'],
  }

  const room = new Room(newRoom)
  // TODO: check if room with same userID exists
  try {
    await room.save()
    return res.status(200).send(room._id)
  } catch (ex) {
    return res.status(400).send(ex)
  }
})

export default router
