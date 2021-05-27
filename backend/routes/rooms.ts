import express from 'express'
import { isAuth } from 'middleware/isAuth'
import { default as Suite } from 'models/suite'
import { isValidObjectId, Types } from 'mongoose'
import Room, { RoomBase, RoomDocument } from './../models/room'
import { CreateRoomRequest } from './../types/index'
const router = express.Router()

router.get<{ id: string }>('/:id/lobby', async (req, res) => {
  const room = await Room.findForLobby(req.params.id)

  if (!room) return res.status(404).send('Room doesnt exists')

  if (req.session.userId !== room.owner.toHexString()) {
    return res.send(room)
  }

  const { name: roomName, suites } = room

  const suitesWithConductorPartOnly = suites.map(({ _id, name, parts }) => ({
    _id,
    name,
    parts: parts.filter(({ isConductors }) => isConductors),
  }))

  return res.send({
    name: roomName,
    suites: suitesWithConductorPartOnly,
    isOwner: true,
  })
})

router.get<{ id: string }>('/:id/concert', async ({ params, query, session }, res) => {
  const roomId = params.id
  if (!isValidObjectId(roomId)) return res.status(401).send('Invalid Room ID')

  const room = await Room.findById(params.id).populate({
    path: 'suites',
    select: 'name',
  })

  if (!room) return res.status(404).send('Room doesnt exists')

  const userPartsString = query.parts?.toString()
  if (!userPartsString) return res.status(400).send('Parts not sent')

  const userSuitePartsMap = new Map(JSON.parse(userPartsString))

  const suite = await Suite.findById(room.currentSuiteId)
  if (!suite) return res.status(400).send('Invalid room')

  const part = suite.parts.find(
    (p) => p.id === userSuitePartsMap.get(room.currentSuiteId.toHexString())
  )

  if (!part) return res.status(404).send('Invalid parts preferences')

  const isOwner = room.owner.toHexString() === session.userId
  // TODO: complete this (return also names for suites, do not return them if not owner???)
  return res.send({ isOwner, suites: room.suites, score: part.musicXML })
})

router.get<void, RoomDocument[]>('/', async (_, res) => {
  // TODO: do not return everything
  const rooms = await Room.find()

  return res.send(rooms)
})

router.post<any, any, CreateRoomRequest>('/', isAuth, async (req, res) => {
  const roomInDb = await Room.findOne({ owner: req.session.userId })
  if (roomInDb) return res.status(400).send('You have already created one room')

  // TODO: allow user to chose suites for room
  const suites = await Suite.find()

  const newRoom: RoomBase = {
    name: req.body.name,
    owner: Types.ObjectId(req.session.userId),
    suites: suites.map((suite) => suite.id),
    currentSuiteId: suites[0].id,
  }

  const room = new Room(newRoom)
  try {
    const { _id, name } = await room.save()
    return res.status(200).send({ _id, name })
  } catch (ex) {
    return res.status(400).send(ex)
  }
})

router.delete('/', isAuth, async (req, res) => {
  try {
    const room = await Room.findOneAndDelete({ owner: req.session.userId })

    if (!room) {
      return res.status(404).send('Room doesnt exists')
    }

    return res.status(200).send(room.id)
  } catch (ex) {
    return res.status(400).send(ex)
  }
})

export default router
