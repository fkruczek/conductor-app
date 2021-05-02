import { connect } from 'mongoose'
import config from 'config'

export default async function (): Promise<void> {
  await connect(config.get('db'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(() => console.log('Connected to database...'))
}