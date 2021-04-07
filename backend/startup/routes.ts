import { Express } from 'express'
import suites from '../routes/suites'
import rooms from '../routes/rooms'
import auth from '../routes/auth'

export default function (app: Express): void {
  app.use('/api/auth', auth)
  app.use('/api/suites', suites)
  app.use('/api/rooms', rooms)
}
