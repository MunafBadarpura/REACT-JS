import React, { useState, lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
// import Dashboard from './Components/Dashboard'
// import Landing from './Components/Landing'
const Landing = lazy(() => import ("./Components/Landing"));
const Dashboard = lazy(() => import ("./Components/Dashboard"));

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Appbar/>
        <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard/> </Suspense>} />
            <Route path="/" element={ <Suspense fallback={"loading..."}> <Landing/> </Suspense> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return(
    <div>
        <button onClick={() => navigate("/") }> Landing </button>
        <button onClick={() => navigate("/dashboard")}> Dashboard </button>
    </div>
  )
}

export default App
