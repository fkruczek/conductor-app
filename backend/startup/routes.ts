import cors from 'cors'
import express, { Express } from 'express'
import auth from '../routes/auth'
import rooms from '../routes/rooms'
import suites from '../routes/suites'

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
