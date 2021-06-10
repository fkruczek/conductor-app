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
  if (config.env === 'production') {
    app.set('trust proxy', 5) // trust first proxy
  }

  const RedisStore = connectRedis(session)
  const redisClient = redis.createClient(config.redisConnection, {
    port: 6379,
    auth_pass: 'mdoBnI4aTmxwhXkXP1u02BssxMWrSVdiOVwNrq0hIDM=',
  })

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
      saveUninitialized: false,
      cookie: {
        domain: 'azurewebsites.net',
        maxAge: 1000 * 60 * 60,
        secure: true,
        httpOnly: false,
        sameSite: 'none',
      },
      // TODO: secure coookies
    })
  )
}
