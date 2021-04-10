import { Express } from 'express'
import express from 'express'
import suites from '../routes/suites'
import rooms from '../routes/rooms'
import auth from '../routes/auth'
import cors from 'cors'

export default function (app: Express): void {
  app.use(
    cors({ credentials: true, origin: 'http://localhost:3000' }), // TODO: do i need this?
    express.json(),
    express.urlencoded({ extended: true }) // TODO: do i need this?
  )
  app.use('/api/auth', auth)
  app.use('/api/suites', suites)
  app.use('/api/rooms', rooms)
}
