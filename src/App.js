import React from 'react'
import ErrorExample from './tutorial/1-useState/setup/1-error-example'
import UseStates from './tutorial/1-useState/setup/2-useState-basics'
import UseStateArray from './tutorial/1-useState/setup/3-useState-array'
import UseStateObject from './tutorial/1-useState/setup/4-useState-object'
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter'

function App() {
  return (
    <div className='container'>
      {/* <ErrorExample /> */}
      {/* <UseStates /> */}
      {/* <UseStateArray /> */}
      <UseStateObject />
      <UseStateCounter />
    </div>
  )
}

export default App
