import React from 'react'
import { useState } from 'react'

const counter = () => {

    let [counter, setCounter] = useState(0)

    const dec = () => {
        const updated = counter - 1;
        setCounter(updated);
    }
    const inc = () => {
        const updated = counter + 1;
        setCounter(updated);
    }

  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={dec}>➖</button>
      <button  onClick={inc}>➕</button>
    </div>
  )
}

export default counter
