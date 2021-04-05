import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
