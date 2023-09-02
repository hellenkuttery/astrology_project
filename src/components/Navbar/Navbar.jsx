import React from 'react'
import "./navbar.scss"
import logo from "../../helpers/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img  src={logo} alt="" />
      </div>
      <div className="list">
          <a href="">Astrology</a>
          <a href="">Horoscope</a>
          <a href="">Tarot</a>
          <a href="">Article</a>
      </div>
    </div>
  )
}

export default Navbar;