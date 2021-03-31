import express from 'express'
import db from './startup/db'
import routes from './startup/routes'
import config from 'config'

const app = express()

db()
routes(app)

app.listen(config.get('port'), () => {
  console.log('Server has started...')
})
