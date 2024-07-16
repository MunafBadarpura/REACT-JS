import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* <ul>
        <a href="/">  <li>Home</li>   </a>
        <a href="/contact">  <li>Contact</li> </a>
        <a href="/login">  <li>Login</li>   </a>
      </ul> */}

      <ul>
        <Link to="/">  <li>Home</li>   </Link>
        <Link to="/contact">  <li>Contact</li> </Link>
        <Link to="/login">  <li>Login</li>   </Link>
      </ul>
    </div>
  )
}

export default Navbar
