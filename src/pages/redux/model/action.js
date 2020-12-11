import fetch from "cross-fetch";


export function selectChange(selectValue) {

  return (dispatch, getState, params) => { // params 是第三参数从 thunk 初始化的时候传入的。 参考https://github.com/reduxjs/redux-thunk

    dispatch({ type: 'SELLECT_VALUE', selectValue })
    return fetch(`https://www.reddit.com/r/${selectValue}.json`)
      .then(response => response.json())
      .then(({ data: { children } }) => dispatch({
        type: 'CURRENT_LIST',
        list: children.map(child => child.data),
      }))
  };
}