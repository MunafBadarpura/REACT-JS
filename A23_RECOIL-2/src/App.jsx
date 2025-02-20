import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { allNotificationSelector, jobAtom, messagesAtom, networkAtom } from './atoms/atom'

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
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const totalNotificationCount = useRecoilValue(allNotificationSelector)

  return(
    <>
        <button>Home</button>

        <button>Messages ({messageNotificationCount >= 100 ? "99+" : messageNotificationCount})</button>
        <button>Network ({networkNotificationCount})</button>
        <button>Jobs ({jobNotificationCount})</button>

        <button>Me ({totalNotificationCount})</button>
    </>
  )
}


  export default App