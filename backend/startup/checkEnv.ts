import config from 'config'

export default function (): void {
  if (!config.get('googleClientId')) {
    throw new Error('ERROR: Environment variable conductor_googleClientId is not defined.')
  }
}
