import { Express } from 'express'
import mongoose from 'mongoose'

export default function (app: Express): void {
  console.log('Configuring routes...')

  app.get('/', (_, res) => {
    const kittySchema = new mongoose.Schema({
      name: String,
    })
    const Kitten = mongoose.model('Kitten', kittySchema)

    const silence = new Kitten({ name: 'Silence' })

    silence.save((err, silence: any) => {
      if (err) throw new Error(err.message)
      res.send(silence.name)
    })
  })
}
