import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)

  return (
    <>
     <Navbar/>
      <div className="card">
        {count}
      </div>
    </>
  )
}

export default App
