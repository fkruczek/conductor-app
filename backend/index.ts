import express from 'express'
import db from './startup/db'
import routes from './startup/routes'
import sockets from './startup/sockets'
import config from 'config'

import { createServer } from 'http'

const app = express()
const httpServer = createServer(app)

db()
routes(app)
sockets(httpServer)

app.get('/', function (_, res) {
  res.send('hello worls')
})

httpServer.listen(config.get('port'), () => console.log('Server has started...'))
