import fetch from "cross-fetch";

export function fetchList2() {
  return fetch(`https://www.reddit.com/r/reactjs.json`)
}

export function fetchList() {
  return fetch(`https://www.reddit.com/r/reactjs.json`).then(response => response.json()).then(data => data)
}

export function fetchListCallback(cb) {
  fetch(`https://www.reddit.com/r/reactjs.json`).then(response => response.json()).then(cb)
}

export function fetchList404() {
  return fetch(`https://aa.vv.com/aa`).then(response => response.json())
}