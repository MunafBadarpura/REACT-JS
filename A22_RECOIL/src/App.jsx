// THINGS THAT LEARN
// 1. RecoilRoot
// 2. atom
// 3. useRecoilState
// 4. useRecoilValue
// 5. useSetRecoilState
// 6. selector

import React, { useState, lazy, Suspense } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from './store/atoms/count'

function App() {
  
  return (
    <>
      <Count/>
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
  const count = useRecoilValue(countAtom)
  return(
    <div>
      {count}
    </div>
  )
}

function Button(){
  const [count, setCount] = useRecoilState(countAtom);
  return(
    <div>
      <button onClick={() => setCount((preCount) => preCount+1 )}>Increase</button>
      <button onClick={() => setCount((preCount) => preCount-1 )}>Decrease</button>
    </div>
  )
}


export default App
