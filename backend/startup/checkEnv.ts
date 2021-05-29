import config from 'config'

export default function (): void {
  const requiredEnvVars = ['googleClientId', 'redisSecret']
  requiredEnvVars.forEach((envVar) => {
    if (!config.get(envVar)) {
      throw new Error(`❌ Environment variable conductor_${envVar} is not defined.`)
    }
  })
}
