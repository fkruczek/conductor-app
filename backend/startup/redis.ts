import config from 'config'
import connectRedis from 'connect-redis'
import { Express } from 'express'
import session from 'express-session'
import redis from 'redis'

declare module 'express-session' {
  export interface SessionData {
    userId: string
  }
}

export default function (app: Express): void {
  // TODO: secure session in prod
  // if (app.get('env') === 'production') {
  //     app.set('trust proxy', 1) // trust first proxy
  //     sess.cookie.secure = true // serve secure cookies
  // }

  const RedisStore = connectRedis(session)
  const redisClient = redis.createClient(config.redisConnection)

  redisClient.on('error', function (error: any) {
    console.error(error)
  })

  redisClient.on('connect', () => {
    console.log('✅ Redis connected...')
  })

  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: config.redisSecret,
      resave: false,
      saveUninitialized: true,

      // TODO: secure coookies
    })
  )
}
