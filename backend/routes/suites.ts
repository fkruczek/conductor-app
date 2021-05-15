import express from 'express'
// import Suite from 'models/suite'
const router = express.Router()
// const migrateSuites = async () => {
//   await Suite.deleteMany()

//   const one = new Suite({
//     name: 'Canon in D',
//     parts: [
//       { musicXML: 'asdf', name: 'Conductor' },
//       { musicXML: 'violin', name: 'Violin 1' },
//       { musicXML: 'clarinet', name: 'Violin 2' },
//       { musicXML: 'viola', name: 'Violoncello' },
//       { musicXML: 'viola', name: 'Piano' },
//     ],
//   })

//   await one.save()

//   const two = new Suite({
//     name: 'Empty suite',
//     parts: [
//       { musicXML: 'second suite conductor sheet', name: 'Conductor' },
//       { musicXML: 'second suite piano sheet', name: 'piano' },
//       { musicXML: 'contrabasscontrabasscontrabasscontrabasscontrabass', name: 'contrabass' },
//       { musicXML: 'cimbalcimbalcimbalcimbalcimbal', name: 'cimbal' },
//       { musicXML: 'cimbalcimbalcimbalcimbalcimbal', name: 'viola' },
//     ],
//   })

//   await two.save()
// }

// migrateSuites()

export default router
