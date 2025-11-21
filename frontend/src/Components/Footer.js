import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-data'>

                {/* CONTACT SECTION */}
                <div className="contact-details">
                    <h1>Contact Us</h1>
                    <p><b>Institute of Engineering & Technology</b></p>
                    <p>IET Lucknow</p>
                    <p>Lucknow, Uttar Pradesh</p>
                    <p>India</p>
                    <p><b>Email:</b> library@ietlucknow.ac.in</p>
                </div>

                {/* USEFUL LINKS */}
                <div className='useful-links'>
                    <h1>Useful Links</h1>
                    <a href='/'>Home</a>
                    <a href='/books'>Books</a>
                    <a href='/gallery'>Gallery</a>
                    <a href='/contact'>Contact</a>
                </div>

                {/* LIBRARIAN SECTION */}
                <div className='librarian-details'>
                    <h1>Librarian</h1>
                    <p><b>Name:</b> Satyashil Gaur</p>
                    <p><b>Qualification:</b> B.Tech (CSE)</p>
                    <p><b>Contact:</b> +91 9140110788</p>
                </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="contact-social">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className='social-icon'>
                    <TwitterIcon style={{ fontSize: 32, color: "#1877F2" }} />
                </a>

                <a href="https://www.linkedin.com/in/satyashil-gaur-5bb1b72b5/"
                   target="_blank" rel="noreferrer"
                   className='social-icon'>
                    <LinkedInIcon style={{ fontSize: 32, color: "#0A66C2" }} />
                </a>

                <a href="https://t.me" target="_blank" rel="noreferrer" className='social-icon'>
                    <TelegramIcon style={{ fontSize: 32, color: "#229ED9" }} />
                </a>

                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className='social-icon'>
                    <InstagramIcon style={{ fontSize: 32, color: "#E1306C" }} />
                </a>
            </div>

            {/* COPYRIGHT */}
            <div className='copyright-details'>
                <p className='footer-copyright'>
                    © {new Date().getFullYear()} All rights reserved.
                    <br />
                    <span>Designed with ❤️ by <b>Satyashil Gaur</b></span>
                </p>
            </div>
        </div>
    )
}

export default Footer
