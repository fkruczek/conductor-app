import config from 'config'
import { connect } from 'mongoose'

export default async function (): Promise<void> {
  await connect(config.get('db'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(() => console.log('✅ Mongo connected...'))
}
