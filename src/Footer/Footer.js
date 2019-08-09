import React from 'react'
import './footer.scss'
import Subscribe from './Subscribe'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter,faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <footer className='footer'>
            <section>
                <h3>TALK TO US</h3>
                <p>801-123-1234</p>
                <p>reachmedia@gmail.com</p>
            </section>
             <section>
                <h3>KEEP UP WITH REACH MEDIA</h3>
                 <Subscribe/>

            </section>
            <section className='social'>
                <div className='content'>
                    <p>Copyright &#169; {new Date().getFullYear()} <a className='large'>Reach Media</a></p>
                <p className='pipe'>&#x7c;</p>
                <p  className='large'>Terms and Conditions</p>
                <p className='pipe'>&#x7c;</p>
                <p  className='large'>Privacy Policy</p>
                </div>
 <div className='icons'>
                     <a href="https://www.facebook.com/socialcornerdfw/?__tn__=%2Cd%2CP-R&eid=ARAi246OzIX-pm7QntKJxiF_dVJUsWfD3PoN_bGzBdBrlUUysCbK1YV-MLXywoPJGzyeccrkbYZQtV5L" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="2x"/>

        </a>
                 <a href="https://www.instagram.com/socialcornerdfw/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a>
            <a href="https://www.instagram.com/socialcornerdfw/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
        </a>
                 <a href="https://www.instagram.com/socialcornerdfw/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
        </a>
      </div>
            </section>
        </footer>
    )
}