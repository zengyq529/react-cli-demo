
import '@babel/polyfill'
import { Provider } from 'react-redux'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

import SagaDemo from './Page'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const Index = () => {
  return (
    <Provider store={store}>
      <SagaDemo></SagaDemo>
    </Provider>
  )
}

export default Index


