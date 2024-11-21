import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  // let counter = 50;

  const incValue = () => {
    counter++;
    setCounter(counter);
  }

  const decValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Basic Counter </h1>
      <h2>Counter's Value : {counter}</h2>
      
      <button onClick={decValue}>Decrement</button>
      <button onClick={incValue}>Increment</button>
    </>
  )
}

export default App
