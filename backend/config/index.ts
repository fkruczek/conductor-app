interface Config {
  env: 'production' | 'development'
  googleClientId: string
  redisSecret: string
  db: string
  port: number
  client: string
  redisHost: string
}

const googleClientId = process.env.CONDUCTOR_GOOGLE_CLIENT_ID || ''
const redisSecret = process.env.CONDUCTOR_REDIS_SECRET || ''
const db = process.env.CONDUCTOR_DB || ''

const production: Config = {
  env: 'production',
  googleClientId,
  redisSecret,
  db,
  port: 80,
  client: 'conductor-app.azurewebsites.net',
  redisHost: 'redis',
}

const development: Config = {
  env: 'development',
  googleClientId,
  redisSecret,
  db,
  port: 3002,
  client: 'http://localhost:3000',
  redisHost: '127.0.0.1',
}

const config = process.env.NODE_ENV === 'production' ? production : development

Object.keys(config).forEach((key) => {
  if (!config[key as keyof Config]) {
    throw new Error(`❌ Config key ${key} is not defined.`)
  }
})

export default config
