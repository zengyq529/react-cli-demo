
import '@babel/polyfill'
import { connect } from 'react-redux'
import React from 'react'

import Counter from './Counter'

import List from './children/list'


const SagaDemo = ({ count, list, dispatch }) => {


  return (
    <>
      <h1>saga demo</h1>
      <Counter
        value={count}
        onIncrement={() => dispatch({ type: 'INCREMENT' })}
        onDecrement={() => dispatch({ type: 'DECREMENT' })}
        onIncrementAsync={() => dispatch({ type: 'INCREMENT_ASYNC' })} />
      <hr />
      <button onClick={() => { dispatch({ type: 'GET_LIST_ASYNC' }) }}>点我获取列表</button>
      <List posts={list}></List>
    </>

  )
}

export default connect(({ count, list }) => { return { count, list } })(SagaDemo)
