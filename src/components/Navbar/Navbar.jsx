import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import Button from '../Button/Button'

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='navLogo'>
            <img src={logo} alt="" />
            <h3>tlas Rentals</h3>
        </div>
            

        <div className='navLinks'>
            <a href="">Home</a>
            <a href="">Features</a>
            <a href="">Testimonials</a>
            <a href="">Pricing</a>
            <a href="">FAQs</a>
        </div>

        <div className='navBtn'>
            
            <button className='navBtnBtn'>Log In</button>
            <Button width="150px" height="38px" title="Sign Up"/>
        </div>

    </div>
  )
}

export default Navbar