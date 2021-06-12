import mongoose from 'mongoose'
import request from 'supertest'
import app from '../../../index'

describe('isAuth middleware', () => {
  it('return 401 if not session userId provided', async () => {
    await request(app).post('/api/rooms').expect(401)
  })

  it('return 400 if invalid session userId provided', async () => {
    app.post('/mockapi/bad-login', (req, res) => {
      req.session.userId = 'Invalid ObjectId'
      res.send()
    })
    const { header } = await request(app).post('/mockapi/bad-login')

    await request(app).delete('/api/rooms').set('Cookie', header['set-cookie']).expect(400)
  })

  it('return 404 if correct session userId provided', async () => {
    app.post('/mockapi/login', (req, res) => {
      req.session.userId = mongoose.Types.ObjectId().toHexString()
      res.send()
    })
    const { header } = await request(app).post('/mockapi/login')

    await request(app).delete('/api/rooms').set('Cookie', header['set-cookie']).expect(404)
  })
})
