import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1);

  const decrementar = () => {
      setCount(count - 1);
  }
  const incrementar = () => {
      setCount(count + 1);
  }

  return (
    <>
      <h1>Contador</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <button disabled={count <= 0} onClick={decrementar}>-</button>
        <div>{count}</div>
        <button disabled={count >=100} onClick={incrementar}>+</button>
      </div>
    </>
  )
}

export default App
