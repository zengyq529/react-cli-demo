import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import D1 from './d1'


const store = createStore();

const DemoPage2 = () => {
  return (
    <Provider store={store}>
      <D1></D1>
    </Provider>
  )
}

export default DemoPage2 