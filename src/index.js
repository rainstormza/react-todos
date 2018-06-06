import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from './redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bulma/css/bulma.css'

const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
