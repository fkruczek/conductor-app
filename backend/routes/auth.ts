import config from 'config'
import express from 'express'
import { OAuth2Client } from 'google-auth-library'
import mongoose from 'mongoose'

const CLIENT_ID = config.get<string>('googleClientId')

const client = new OAuth2Client(CLIENT_ID)

const router = express.Router()

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
})

const User = mongoose.model('User', userSchema)

// router.get('/', (_, res) => {
//   const silence = new Kitten({ name: 'Silence' })

//   silence.save((err, silence: any) => {
//     if (err) throw new Error(err.message)
//     res.send(silence.name)
//   })
// })

// TODO: error handling, validation
router.post('/google', async (req, res) => {
  const { token } = req.body
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  })
  const payload = ticket.getPayload()
  const newUser = new User(payload)
  console.log(payload)
  console.log(newUser)
  //   const user = await db.user.upsert({
  //     where: { email: email },
  //     update: { name, picture },
  //     create: { name, email, picture },
  //   })
  res.status(201)
  res.json(newUser)
})

export default router
