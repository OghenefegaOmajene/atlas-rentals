import React from 'react'
import './Footer.css'
import logo2 from '../../assets/images/logo2.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerBody">
            <div className="footerLogoBox">
                <div className="footerLogo">
                    <img src={logo2} alt="" />
                    <h2>tlas Rentals</h2>
                </div>
                <p>Reinventing property search with natural language intelligence.</p>
            </div>

            <div className="footerLinks">
                <h2>Company</h2>
                <p>About</p>
                <p>AI & Innovation</p>
            </div>


            <div className="footerLinks">
                <h2>Guests</h2>
                <p>FAQs</p>
                <p>Cancellation Policy</p>
            </div>

            <div className="footerLinks">
                <h2>Legal & Policies</h2>
                <p>Terms of Service</p>
                <p>Refund Policy</p>
            </div>

            <div className="footerLinks">
                <h2>Support & Contact</h2>
                <p>Help Center</p>
                <p>Contact Us</p>
            </div>

        </div>
        <div className="footerTxt">
            <h1>Atlas Rentals</h1>
        </div>
        
    </div>
  )
}

export default Footer