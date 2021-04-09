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
  console.log(req.body)
  const { token } = req.body
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  })
  const payload = ticket.getPayload()
  // TODO: Is it correct status and is it needed?
  if (!payload) return res.status(404).send('Couldnt get ticket payload')
  const { given_name, name, picture, email } = payload
  const newUser = new User({
    // TODO: Check if given_name can be null
    name: given_name || name,
    picture,
    email,
  })
  console.log(newUser)

  console.log('setting: ', newUser.id)
  req.session.userId = 'asdfasdf'
  // req.session.save()

  //   const user = await db.user.upsert({
  //     where: { email: email },
  //     update: { name, picture },
  //     create: { name, email, picture },
  //   })
  return res.status(201).end()
})

export default router
