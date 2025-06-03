import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        {/* <a href='/about'>About</a> */}
        {/* <a href='/contact'>Contact</a> */}

    </div>
  )
}

export default Navbar