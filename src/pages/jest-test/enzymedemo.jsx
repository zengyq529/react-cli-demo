
import React, { useState } from 'react'


export function DemoComponent(){
  return <div>dssfsf</div>
}


const App = ({value:_v,onChange}) => {
  const [num, setNum] = useState(0)
  return (
    <div id="app" onClick={() => setNum(num + 1)} data-test="container">
      <div className="class-name" title="hhh"></div>
      <input value={_v} onChange={({target:{value}})=>{ console.log(value);onChange(value)}} />
      {num}
    </div>
  )
}

export default App;