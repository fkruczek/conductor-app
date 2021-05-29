import { AppProviders } from 'context'
import React from 'react'
import ReactDOM from 'react-dom'
import { initSocket } from 'sockets/startup'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'

initSocket()

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
