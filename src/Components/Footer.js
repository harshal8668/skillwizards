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
          
            <ul className="footer__links my-3">
              <li><a href="mailto:theskillwizards@gmail.com?cc=harshalborkar10105@gmail.com&bcc=sankitbinkar0904@gmail.com&subject=For Enquiry&body=Hello"><i className="bi bi-envelope fs-2"></i></a></li>
              <li><a href="https://www.instagram.com/theskillwizards?igsh=MW9vZnEyaGhjeW1ndg=="><i className="bi bi-instagram fs-3"></i></a></li>
              <li><a href="https://www.linkedin.com/in/skill-wizards-36306b30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin fs-3"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCrcRXl-1fF4EwLahWj2eWTg"><i className="bi bi-youtube fs-2"></i></a></li>
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
