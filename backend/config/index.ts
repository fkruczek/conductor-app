interface Config {
  env: 'production' | 'development'
  googleClientId: string
  redisSecret: string
  db: string
  port: number
  client: string
  redisConnection: string
}

const googleClientId = process.env.CONDUCTOR_GOOGLE_CLIENT_ID || ''
const redisSecret = process.env.CONDUCTOR_REDIS_SECRET || ''
// const redisConnection = process.env.CONDUCTOR_REDIS_CONNECTION || ''
const db = process.env.CONDUCTOR_DB || ''

const production: Config = {
  env: 'production',
  googleClientId,
  redisSecret,
  db,
  port: 80,
  client: 'https://conductor-app.azurewebsites.net',
  redisConnection: 'redis://conductor-redis.redis.cache.windows.net',
}

const development: Config = {
  env: 'development',
  googleClientId,
  // redisConnection,
  redisConnection: 'redis://conductor-redis.redis.cache.windows.net',
  redisSecret,
  db,
  port: 3001,
  client: 'http://localhost:3000',
}

// const config = production
const config = process.env.NODE_ENV === 'production' ? production : development

Object.keys(config).forEach((key) => {
  if (!config[key as keyof Config]) {
    throw new Error(`❌ Config key ${key} is not defined.`)
  }
})

export default config
