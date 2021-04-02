import { Express } from 'express'
import suites from '../routes/suites'

export default function (app: Express): void {
  console.log('Configuring routes...')
  app.use('/api/suites', suites)
}
