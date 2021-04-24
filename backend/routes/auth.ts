import config from 'config'
import express from 'express'
const router = express.Router()
import User, { UserType } from 'models/user'
import { OAuth2Client } from 'google-auth-library'

const CLIENT_ID = config.get<string>('googleClientId')
const client = new OAuth2Client(CLIENT_ID)

// TODO: error handling, validation
// TODO: add typescript to all of this
router.post('/google', async (req, res) => {
  const { token } = req.body
  if (!token) return res.status(401).send('Token not provided')
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    })

    const googleUserPayload = ticket.getPayload()

    if (!googleUserPayload) throw new Error('Couldnt get user payload')

    const { name, picture, email } = googleUserPayload

    if (!name || !picture || !email) {
      return res.status(401).send('Google account incomplete')
    }

    const newUser: UserType = {
      name,
      picture,
      email,
    }

    const newOrUpdatedUser = await User.findOneAndUpdate({ email }, newUser, {
      upsert: true,
      new: true,
    })

    req.session.userId = newOrUpdatedUser.id

    return res.status(201).send(newOrUpdatedUser)
  } catch (ex) {
    return res.status(404).send(ex)
  }
})

// TODO: logout, delete account

export default router
