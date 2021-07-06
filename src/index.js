import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
//By importing reducer in this manner, the reducer
//will be whatever the file './reduceres/'exports!
//In this case, it will be the invocation of combineReducers
import reducer from './reducers'
import middleware from './middleware'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

//create store
const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

