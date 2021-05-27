import express from 'express'
import Suite from 'models/suite'
const router = express.Router()
const migrateSuites = async () => {
  await Suite.deleteMany()

  const one = new Suite({
    name: 'Canon in D',
    parts: [
      { musicXML: '1', name: 'Conductor', isConductors: true },
      { musicXML: '2', name: 'Violin 1', isConductors: false },
      { musicXML: '3', name: 'Violin 2', isConductors: false },
      { musicXML: '4', name: 'Violoncello', isConductors: false },
      { musicXML: '5', name: 'Piano', isConductors: false },
    ],
  })

  await one.save()

  const two = new Suite({
    name: 'Empty suite',
    parts: [
      { musicXML: '1', name: 'Conductor', isConductors: true },
      { musicXML: '2', name: 'piano', isConductors: false },
      {
        musicXML: '3',
        name: 'contrabass',
        isConductors: false,
      },
      { musicXML: '4', name: 'cimbal', isConductors: false },
      { musicXML: '5', name: 'viola', isConductors: false },
    ],
  })

  await two.save()
}

migrateSuites()

export default router
