
import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div id="app" onClick={() => setNum(num + 1)} data-test="container">
      <div className="class-name" title="hhh"></div>
      {num}
    </div>
  )
}

export default App;