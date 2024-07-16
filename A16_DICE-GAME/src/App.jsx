import './App.css'
import styled from "styled-components"
import Start from "./Components/Start";
import Game from './Components/Game';
import { useState } from 'react';

function App() {

  let [check, setCheck] = useState(true);

  function toggle(){
    setCheck((preVal) => !preVal);
  }

  return (
    <>
      {check==true ? <Game/> : <Start buttonToggle={toggle} />}
    </>
  )
}

export default App

