import express from 'express'
import checkEnv from './startup/checkEnv'
import db from './startup/db'
import routes from './startup/routes'
import sockets from './startup/sockets'
import config from 'config'
import redis from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { createServer } from 'http'

const RedisStore = connectRedis(session)
const redisClient = redis.createClient()

const app = express()
const httpServer = createServer(app)

// TODO: secure session in prod
// if (app.get('env') === 'production') {
//     app.set('trust proxy', 1) // trust first proxy
//     sess.cookie.secure = true // serve secure cookies
// }

declare module 'express-session' {
  export interface SessionData {
    userId: string
  }
}

redisClient.on('error', function (error) {
  console.error(error)
})

redisClient.on('connect', () => {
  console.log('✅ 💃 connect redis success !')
})
app.set('trust proxy', 1)
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: 'keyboard cat', // TODO: store in env var
    resave: false,
    saveUninitialized: true,
  })
)

checkEnv()
db()
routes(app)
sockets(httpServer)

httpServer.listen(config.get('port'), () => console.log('Server has started...'))
