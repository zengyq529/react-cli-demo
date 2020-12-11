import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import D1 from './d1'
import rootReducer from './model/reducer';
import thunkMiddleware from 'redux-thunk';

// 

const store = createStore(rootReducer, { list: [], selectValue: 'reactjs' }, applyMiddleware(thunkMiddleware));

const DemoPage2 = () => {
  return (
    <Provider store={store}>
      <D1></D1>
    </Provider>
  )
}

export default DemoPage2