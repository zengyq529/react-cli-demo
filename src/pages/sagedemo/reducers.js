
import { combineReducers } from 'redux';

function count(state = 1, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}




const list = (state = [], { list, type }) => {
  switch (type) {
    case 'GET_LIST':
      return list
    default:
      return state
  }
};


const rootReducer = combineReducers({
  list,
  count
})

export default rootReducer;