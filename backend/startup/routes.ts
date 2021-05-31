import config from 'config'
import cors from 'cors'
import express, { Express } from 'express'
import auth from '../routes/auth'
import rooms from '../routes/rooms'
import suites from '../routes/suites'

export default function (app: Express): void {
  app.use(
    cors({ credentials: true, origin: config.client }),
    express.json()
    // express.urlencoded({ extended: true })
  )
  app.use('/api/auth', auth)
  app.use('/api/suites', suites)
  app.use('/api/rooms', rooms)
}
