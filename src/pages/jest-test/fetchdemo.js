import fetch from "cross-fetch";

export function fetchList() {
  return new Promise((resolve) => {
    resolve({ a: 1, b: 2 });
  })
}

export function fetchListCallback(cb) {
  cb({ a: 1, b: 2 });
}

export function fetchList404() {
  return fetch(`https://www.alibaba.com/aa`).then(response => response.json())
}