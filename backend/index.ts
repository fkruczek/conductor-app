import config from 'config'
import express from 'express'
import { createServer } from 'http'
import logger from 'startup/logger'
import db from './startup/db'
import redis from './startup/redis'
import routes from './startup/routes'
import sockets from './startup/sockets'

const app = express()
const httpServer = createServer(app)

logger()
db()
redis(app)
routes(app)
sockets(httpServer)

httpServer.listen(config.port, () => console.log('✅ Server has started...'))
