// THINGS THAT LEARN
// 1. RecoilRoot
// 2. atom
// 3. useRecoilState
// 4. useRecoilValue
// 5. useSetRecoilState
// 6. selector

import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
function App() {
  return (
    <>
      <RecoilRoot>
        <Count/>
      </RecoilRoot> 
    </>
  )
}


function Count(){
  console.log("Count");
  return (
    <div>
      <CountRender/>
      <Button/>
      <Even/>
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
  const setCount =  useSetRecoilState(countAtom)
  console.log("button");
  return(
    <div>
      <button onClick={() => setCount(preCount => preCount+1 )}>Increase</button>
      <button onClick={() => setCount(preCount => preCount-1 )}>Decrease</button>
    </div>
  )
}

function Even(){
  const isEven = useRecoilValue(evenSelector);
  console.log(isEven);
  return(
    <div>
      {isEven ? "Even" : null}
    </div>
  )
}


export default App
