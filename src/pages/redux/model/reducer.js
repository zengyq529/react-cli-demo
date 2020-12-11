
import { combineReducers } from 'redux';

const list = (state = [], { list, type }) => {
  switch (type) {
    case 'CURRENT_LIST':
      return list
    default:
      return state
  }
};
const selectValue = (state = 'reactjs', { type, selectValue }) => {
  switch (type) {
    case 'SELLECT_VALUE':
      return selectValue
    default:
      return state
  }
};

const rootReducer = combineReducers({
  list,
  selectValue
})

export default rootReducer;