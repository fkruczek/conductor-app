import express from 'express'
import Suite from 'models/suite'
const router = express.Router()

const migrateSuites = async () => {
  await Suite.deleteMany()

  const one = new Suite({
    name: 'first suite',
    currentMeasure: 0,
    parts: [
      { musicXML: 'notesnviolinoteviolinsnotviolines', name: 'conductor' },
      { musicXML: 'conductornotespartsconductornotes', name: 'violin' },
      { musicXML: 'clarinetclarinetclarinetclarinet', name: 'clarinet' },
      { musicXML: 'violaviolaviolaviolaviola', name: 'viola' },
    ],
  })

  await one.save()

  const two = new Suite({
    name: 'first suite',
    currentMeasure: 0,
    parts: [
      { musicXML: 'second suite conductor sheet', name: 'conductor' },
      { musicXML: 'pianopianopianopianopianopiano', name: 'piano' },
      { musicXML: 'contrabasscontrabasscontrabasscontrabasscontrabass', name: 'contrabass' },
      { musicXML: 'cimbalcimbalcimbalcimbalcimbal', name: 'cimbal' },
    ],
  })

  await two.save()
}

migrateSuites()

export default router
