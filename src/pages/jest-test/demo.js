


export function sum(...args) {
  let res = args.reduce((accumulator, current)=>accumulator+current) 
  console.log(res)
  return res
}