import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer-text">
                    <p>© Oli Harris 2023</p>
                </div>
                <div className="footer-link">
                    <a href="">Twitter</a>
                    <a href="">Linkedin</a>
                    <a href="">Mail</a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer