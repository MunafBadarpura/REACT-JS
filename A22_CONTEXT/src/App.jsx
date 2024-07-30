// why we use context
// wrong ans : to make rendring more performance
// right ans : to make syntax clear and avoid prop drilling 

import React, { useState, lazy, Suspense } from 'react'
import { CountContext } from './assets/context';
import { useContext } from 'react';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <CountContext.Provider value={{count, setCount}}>
      <Count/>
      </CountContext.Provider>
    </>
  )
}


function Count(){
  return (
    <div>
      <CountRender/>
      <Button/>
    </div>
  )
}

function CountRender(){
  const {count} = useContext(CountContext)
  return(
    <div>
      {count}
    </div>
  )
}

function Button(){
  const { count, setCount } = useContext(CountContext);
  return(
    <div>
      <button onClick={() => setCount((preCount) => preCount+1 )}>Increase</button>
      <button onClick={() => setCount((preCount) => preCount-1 )}>Decrease</button>
    </div>
  )
}


export default App
