


export function sum(...args) {
  let res = args.reduce((accumulator, current) => accumulator + current)
  return res
}


export class Counter {
  constructor() {
    this.count = 1;
  }
  add() {
    this.count += 1;
  }
  minus() {
    this.count -= 1;
  }
}



export function runCbDemo(cb) {
  // 业务代码
  cb && cb('cbdata')
}

import fetch from "cross-fetch";

export function fetchDataDemo() {
  return fetch(`https://www.reddit.com/r/reactjs.json`)
}



 