import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { counterContext } from './Context/contex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <counterContext.Provider  value={{count, setCount}}>
        <Navbar/>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </counterContext.Provider>
    </>
  )
}

export default App
