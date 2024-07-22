import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar/>

      <div className='container rounded-xl bg-violet-100 my-5 p-5 mx-auto min-h-[80vh]'>

          <div className="add-todo my-5">
              <h2 className='text-lg font-bold'>Add a todo</h2>
              <input className='w-1/2' type="text"/>
              <button className='bg-violet-700 hover:bg-violet-900  text-white p-3 py-1 mx-6 rounded-lg'>Add</button>
          </div>

          <h2 className='text-lg font-bold'>Your todos</h2>
  
          <div className="todos">

            <div className="todo flex">
              <div className="todo-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
              <div className="buttons">
                  <button className='bg-violet-700 hover:bg-violet-900  text-white p-3 py-1 mx-2 rounded-lg'>Edit</button>
                  <button className='bg-violet-700 hover:bg-violet-900  text-white p-3 py-1 mx-2 rounded-lg'>Delete</button>
              </div>
            </div>

          </div>

      </div>
    </>
  )
}

export default App
