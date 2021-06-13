import Room from 'models/room'
import mongoose from 'mongoose'
import request from 'supertest'
import app from '../../../index'
describe('rooms', () => {
  beforeAll(async () => {
    await Room.deleteMany()
  })
  afterEach(async () => {
    await Room.deleteMany()
  })

  describe('GET', () => {
    it('return empty array if no rooms in db', async () => {
      const res = await request(app).get('/api/rooms')
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual([])
    })

    it('return list of all rooms', async () => {
      await new Room({
        name: 'aaa',
        owner: mongoose.Types.ObjectId(),
        suites: [],
        currentSuiteId: mongoose.Types.ObjectId(),
      }).save()

      await new Room({
        name: 'bbb',
        owner: mongoose.Types.ObjectId(),
        suites: [],
        currentSuiteId: mongoose.Types.ObjectId(),
      }).save()

      const res = await request(app).get('/api/rooms')

      expect(res.body).toHaveLength(2)
      expect(res.body[0]).toHaveProperty('_id')
      expect(res.body[0]).toHaveProperty('name')
    })
  })
})
