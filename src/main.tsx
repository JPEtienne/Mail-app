import { Provider } from 'react-redux'
import { store } from './app/store'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
