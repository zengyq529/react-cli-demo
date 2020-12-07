
import React, { useState } from 'react'
import AsyncApp from './components/AsyncApp'
import configureStore from './model/configureStore'
import { Provider } from 'react-redux'
const store = configureStore()

const DemoPage = () => {
  return (
    <Provider store={store}>
      <h1>redux 高级完整例子</h1>
      <AsyncApp></AsyncApp>
    </Provider>
  )
}


export default DemoPage