import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar'
import Content from './assets/Components/Content'
import Contact from './assets/Components/Contact'

function App() {
  return(
    <div className="main">
      <Navbar/>
      <Content/>
      <Contact/>
    </div>
    
  )
}

export default App
