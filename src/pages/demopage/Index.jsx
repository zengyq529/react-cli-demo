
import React from 'react'
import AsyncApp from './AsyncApp'
import configureStore from './model/configureStore'
import { Provider } from 'react-redux'
const store = configureStore()

const DemoPage = () => {
  return (
    <Provider store={store}>
      <h1>redux demo</h1>
      <AsyncApp></AsyncApp>
    </Provider>
  )
}


export default DemoPage