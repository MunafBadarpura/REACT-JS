import { useMemo, useState } from 'react'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((value,i) => {
  return{
    index: i,
    isMagical: i === 29_000_000
  }
})


function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  // const magicalNumber = numbers.find(item => item.isMagical===true)
  const magicalNumber = useMemo(() => numbers.find(item => item.isMagical===true), [numbers]);
  

  return (
    <>
      <div>
          <h2>{magicalNumber.index}</h2>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </>
  )
}

export default App
