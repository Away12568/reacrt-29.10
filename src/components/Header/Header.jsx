import React from 'react'
import "./Header.scss"




const Header = () => {
  return (
    <>
        <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <nav className="nav">
                    <a href="">home</a>
                    <a href="">profile</a>
                    <a href="">contact</a>
                </nav>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
