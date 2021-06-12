import config from 'config/config'
import { connect } from 'mongoose'

export default async function (): Promise<void> {
  await connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).then(() => console.log('✅ Mongo connected...'))
}
