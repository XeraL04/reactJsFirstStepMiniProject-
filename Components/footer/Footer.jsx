import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons'

import './Footer.css'
function Footer() {
  return (
    <div>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#"> About Us</a></li>
                        <li><a href="#"> Privacy Policy</a></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <h4>Our services</h4>
                    <ul>
                        <li><a href="">Active GPS Solution</a></li>
                        <li><a href="">Hotline Service</a></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <p>Route Wilayale N°113, Lot N°4, 
                        <br/> Commune de Baba Hassen, Alger, Algerie 
                        <br/> Tel : +213 21 301 057 / +213 21 301 200 
                    </p>
                </div>
                <div className="footer-col">
                    <h4> follow us</h4>
                    <div className="social-links">
                        <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="#"><FontAwesomeIcon icon={faGooglePlus}/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer