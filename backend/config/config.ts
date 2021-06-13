interface Config {
  env: 'production' | 'development' | 'test'
  googleClientId: string
  redisSecret: string
  db: string
  port: number
  client: string
  redisConnection: string
  redisPassword?: string
}

const googleClientId = process.env.CONDUCTOR_GOOGLE_CLIENT_ID || ''
const redisSecret = process.env.CONDUCTOR_REDIS_SECRET || ''
const redisPassword = process.env.CONDUCTOR_REDIS_PASSWORD || ''
const db = process.env.CONDUCTOR_DB || ''

const production: Config = {
  env: 'production',
  googleClientId,
  db,
  port: 80,
  client: 'https://conductor-app.azurewebsites.net',
  redisSecret,
  redisPassword,
  redisConnection: 'redis://conductor-redis.redis.cache.windows.net',
}

const development: Config = {
  env: 'development',
  googleClientId,
  db,
  port: 3010,
  client: 'http://localhost:3000',
  redisSecret,
  redisPassword,
  redisConnection: 'redis://localhost',
}

const test: Config = {
  env: 'test',
  googleClientId: 'test',
  db: 'mongodb://localhost:27017/conductor-test?readPreference=primary&appname=Conductor&ssl=false',
  port: 3010,
  client: 'http://localhost:3000',
  redisSecret: 'test',
  redisPassword: 'test',
  redisConnection: 'redis://localhost',
}

let config: Config

switch (process.env.NODE_ENV) {
  case 'production':
    config = production
    break
  case 'test':
    config = test
    break
  default:
    config = development
}

Object.keys(config).forEach((key) => {
  if (!config[key as keyof Config]) {
    throw new Error(`❌ Config key ${key} is not defined.`)
  }
})

export default config
