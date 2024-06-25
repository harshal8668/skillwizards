import React from 'react'
import Contact from './Contact'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <span>
          <img src={require("../assets/handshake.png")}   alt="icon"  width={50} height={50}/>
          <p className='fs-3'>Inspiring Minds, Shaping India's Tech Landscape</p>
          </span>
          
            <ul className="footer__links my-3 ">
              <li><a href="/"><i className="bi bi-whatsapp fs-2"></i></a></li>
              <li><a href="/"><i className="bi bi-instagram fs-2"></i></a></li>
              <li><a href="/"><i className="bi bi-linkedin fs-2"></i></a></li>
              <li><a href="/"><i className="bi bi-youtube fs-2"></i></a></li>
            </ul>
          <ul className="footer__links my-3">
            <li><a href="/">Terms of Use</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <Contact></Contact>
            
          </ul>
          <p>Copyright <i className="bi bi-c-circle"></i> 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
