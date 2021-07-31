import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

import './app.less'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...[
    logger,
    ({ getState }) => (next) => (action) => {
      console.log(getState(), action)
      next(action);
      console.log(getState())
    },
  //   ({ getState }) => (next) => (action) => {
  //     console.log(getState(), action)
  //     if (action.text !== '喝酒') {
  //       next(action)
  //     } else {
  //       alert('您的身体已经不允许您喝酒了！！')
  //     };
  //     console.log(getState())
  //   }
  ]),
  // other store enhancers if any
))

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
} 

export default App
