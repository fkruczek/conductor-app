import config from 'config'
import express from 'express'
import { OAuth2Client } from 'google-auth-library'
import mongoose from 'mongoose'

const router = express.Router()

// TODO: extract mongoose stuff from here
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
})
const User = mongoose.model('User', userSchema)

const CLIENT_ID = config.get<string>('googleClientId')
const client = new OAuth2Client(CLIENT_ID)

// TODO: error handling, validation
// TODO: add typescript to all of this
router.post('/google', async (req, res) => {
  const { token } = req.body

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  })

  const googleUserPayload = ticket.getPayload()

  // TODO: Is it correct status and is it needed?
  if (!googleUserPayload) return res.status(404).send('Couldnt get ticket payload')

  const { given_name, name, picture, email } = googleUserPayload

  const newUser = {
    // TODO: Check if given_name can be null
    name: given_name || name,
    picture,
    email,
  }

  const newOrUpdatedUser = await User.findOneAndUpdate({ email }, newUser, {
    upsert: true,
    new: true,
  })

  console.log(newOrUpdatedUser)

  req.session.userId = newOrUpdatedUser.id

  return res.status(201).end()
})

// TODO: logout, delete account

export default router
