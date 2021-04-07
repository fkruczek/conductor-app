import express from 'express'
import checkEnv from './startup/checkEnv'
import db from './startup/db'
import routes from './startup/routes'
import sockets from './startup/sockets'
import config from 'config'
import cors from 'cors'
import { createServer } from 'http'

const app = express().use(cors())

const httpServer = createServer(app)

checkEnv()
db()
routes(app)
sockets(httpServer)

httpServer.listen(config.get('port'), () => console.log('Server has started...'))
