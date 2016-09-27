import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import { Provider } from 'react-redux'
import App from './components/App'

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
