import express from 'express'
import { isAuth } from 'middleware/isAuth'
import { default as Suite } from 'models/suite'
import { isValidObjectId, Types } from 'mongoose'
import Room, { RoomDocument, RoomType } from './../models/room'
import { CreateRoomRequest } from './../types/index'
const router = express.Router()

interface HalfPopulatedSuite {
  _id: Types.ObjectId
  name: string
  parts: { name: string }[]
}

// TODO: POST/PUT will user preferences for given room

router.get<{ id: string }, RoomDocument | any | string>('/:id/lobby', async (req, res) => {
  const room = await Room.findById(req.params.id).populate({
    path: 'suites',
    select: 'name parts.name parts._id',
  })
  if (!room) return res.status(404).send('Room doesnt exists')

  if (req.session.userId !== room.owner.toHexString()) {
    return res.send(room)
  }

  const { name } = room
  // ugly conversion (for now i dont have any other idea to type model Population)
  const suites = (room.suites as unknown) as HalfPopulatedSuite[]

  // TODO: it shouldnt be identified by name
  const suitesWithConductorPartOnly = suites.map(({ _id, name, parts }) => ({
    _id,
    name,
    parts: parts.filter(({ name }) => name === 'Conductor'),
  }))

  const roomResponseForOwner = {
    name: name,
    suites: suitesWithConductorPartOnly,
    isOwner: true,
  }

  return res.send(roomResponseForOwner)
})

router.get<{ id: string }, any>('/:id/concert', async (req, res) => {
  // TODO: will return current score
  // TODO: do not return everything

  const roomId = req.params.id
  if (!isValidObjectId(roomId)) return res.status(401).send('Invalid Room ID')

  const room = await Room.findById(req.params.id).populate({
    path: 'suites',
    select: 'name',
  })

  if (!room) return res.status(404).send('Room doesnt exists')

  const userPartsString = req.query.parts?.toString()
  if (!userPartsString) return res.status(401).send('Parts not sent')

  const userSuitePartsMap = new Map(JSON.parse(userPartsString))

  const suite = await Suite.findById(room.currentSuiteId)
  // TODO: when suite doesnt exists delete this room?
  if (!suite) return res.status(404).send('Invalid room')

  const part = suite.parts.find(
    (p) => p.id === userSuitePartsMap.get(room.currentSuiteId.toHexString())
  )

  if (!part) return res.status(404).send('Invalid parts preferences')

  const isOwner = room.owner.toHexString() === req.session.userId
  // TODO: complete this (return also names for suites, do not return them if not owner???)
  return res.send({ isOwner, suites: room.suites, score: part.musicXML })
})

router.get<void, RoomDocument[]>('/', async (_, res) => {
  // TODO: do not return everything
  const rooms = await Room.find()

  return res.send(rooms)
})

router.post<any, any, CreateRoomRequest>('/', isAuth, async (req, res) => {
  // TODO: allow user to chose suites for room
  const suites = await Suite.find()

  const newRoom: RoomType = {
    name: req.body.name,
    owner: Types.ObjectId(req.session.userId),
    suites: suites.map((suite) => suite.id),
    currentSuiteId: suites[0].id,
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
