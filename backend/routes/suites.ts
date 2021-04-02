import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()

const kittySchema = new mongoose.Schema({
  name: String,
})

const Kitten = mongoose.model('Kitten', kittySchema)

router.get('/', (_, res) => {
  const silence = new Kitten({ name: 'Silence' })

  silence.save((err, silence: any) => {
    if (err) throw new Error(err.message)
    res.send(silence.name)
  })
})

export default router
