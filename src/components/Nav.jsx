import React from 'react'
import { Link } from 'react-router-dom'
import "./global.css"

const Nav = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <img src="https://w7.pngwing.com/pngs/17/243/png-transparent-computer-icons-arshad-ayub-graduate-business-school-students-miscellaneous-logo-monochrome.png" alt="logo" /></div>
        <div className="menu_block">
        <Link to={"/"}>Home</Link>
        <Link to={"/register"}>Register</Link>
       <Link to={"/login"}>Login</Link>
      {/* <Link to={"/dashboard"}>Dashboard</Link> */}


        </div>

      </div>
    </nav>

    </>
  )
}

export default Nav
