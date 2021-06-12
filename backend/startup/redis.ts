import config from 'config/config'
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
  if (config.env === 'production') {
    app.set('trust proxy', true)
  }

  const RedisStore = connectRedis(session)
  const redisClient = redis.createClient(config.redisConnection, {
    port: 6379,
    auth_pass: config.redisPassword,
  })

  redisClient.on('error', function (error: any) {
    console.error(error)
  })

  redisClient.on('connect', () => {
    console.log('✅ Redis connected...')
  })

  app.use(
    session({
      store: new RedisStore({ client: redisClient, pass: config.redisSecret }),
      secret: config.redisSecret,
      proxy: true, // check if needed
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: config.env === 'production' ? true : false,
        sameSite: config.env === 'production' ? 'none' : false, // check if needed
        httpOnly: config.env === 'production' ? true : false,
      },
    })
  )
}
