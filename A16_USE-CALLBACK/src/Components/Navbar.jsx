import React from 'react'
import { memo } from 'react';

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar randerd");
  return (
    <div>
      <h3>I am a {adjective} navbar</h3>
      <button onClick={() => {getAdjective()}}>ClickMe!</button>
    </div>
  )
}

export default memo(Navbar)
