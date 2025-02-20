// THINGS THAT LEARN
// 1. RecoilRoot = this is for wrap component that use recoil
// 2. atom = this is for creating atom in seprate file
// 3. useRecoilState = this is for use both countAtom ant setCountAtom
// 4. useRecoilValue  = this is for use only countAtom
// 5. useSetRecoilState = this is for use only setCountAtom
// 6. selector = selector is smthing that derived from other atoms (like useMemo)

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
