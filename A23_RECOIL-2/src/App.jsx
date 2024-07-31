import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { messagesAtom, networkAtom } from './atoms/atom'

function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </>
  )
}


function MainApp(){

  const messageNotificationCount = useRecoilValue(messagesAtom);
  console.log(messageNotificationCount);

  return(
    <>
        <button>Home</button>

        <button>Messages ({messageNotificationCount >= 100 ? "99+" : messageNotificationCount})</button>
        <button>Network ()</button>
        <button>Jobs ()</button>

        <button>Me</button>
    </>
  )
}


  export default App