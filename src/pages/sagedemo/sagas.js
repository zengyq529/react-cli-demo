import { all, call, delay, put, takeEvery } from 'redux-saga/effects'

import fetch from "cross-fetch";
export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  console.log('saga act')
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

//测试异步功能
export function* getList() {
  let list = yield fetch(`https://www.reddit.com/r/reactjs.json`)
    .then(response => response.json())
    .then(({ data: { children } }) => children.map(child => child.data))

  yield put({ type: 'GET_LIST', list })
}



// single entry point to start all Sagas at once
export default function* rootSaga(data) {
  //这里可以使用 all call 
  yield takeEvery('INCREMENT_ASYNC', incrementAsync) //这个触发 type=INCREMENT_ASYNC 的dispatch
  yield takeEvery('GET_LIST_ASYNC', getList) //这个触发 type=INCREMENT_ASYNC 的dispatch
}

