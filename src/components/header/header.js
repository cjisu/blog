import React from "react"
import './header.css'

const Header = () => (
  <div className="header">
    <div className="header__item" style={{color: `#ffae00`}}>Blog</div>
    <div className="header__item" style={{color: `#b9b9b9`}}>Project</div>
    <div className="header__item" style={{color: `#b9b9b9`}}>About</div>
  </div>
)

export default Header;