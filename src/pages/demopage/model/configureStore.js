import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware, //提供功能让dispacth 可以接受延迟函数
      loggerMiddleware,
      sagaMiddleware,//提供 Generators 功能
    )
  )
}