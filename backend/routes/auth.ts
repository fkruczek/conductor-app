import config from 'config'
import express from 'express'
import { OAuth2Client } from 'google-auth-library'
import User, { UserType } from 'models/user'
import { LoginResponse } from 'types'
import Room from './../models/room'
const router = express.Router()

const CLIENT_ID = config.get<string>('googleClientId')
const client = new OAuth2Client(CLIENT_ID)

router.post<null, LoginResponse | string>('/google', async (req, res) => {
  const { token } = req.body
  if (!token) return res.status(400).send('Token not provided')
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    })

    const googleUserPayload = ticket.getPayload()

    if (!googleUserPayload) throw new Error('Couldnt get user payload')

    const { given_name, picture, email } = googleUserPayload

    if (!given_name || !picture || !email) {
      return res.status(400).send('Google account incomplete')
    }

    const newUser: UserType = {
      name: given_name,
      picture,
      email,
    }

    const { id, name } = await User.findOneAndUpdate({ email }, newUser, {
      upsert: true,
      new: true,
    })
      .select('email name picture _id')
      .exec()

    req.session.userId = id

    const ownedRoom = await Room.findOne({ owner: id }, '_id name')

    return res.status(201).send({ id, name, picture, ownedRoom, email })
  } catch (ex) {
    return res.status(400).send(ex)
  }
})

// TODO: logout, delete account

export default router
