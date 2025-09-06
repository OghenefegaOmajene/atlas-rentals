import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { IoSearch } from "react-icons/io5";
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
            <a href="">Discover <IoSearch className='navSearch'/></a>
            <a href="">Properties</a>
            <a href="">Hosts</a>
        </div>

        <div className='navBtn'>
            
            <button className='navBtnBtn'>Log In</button>
            <h4>Become a host</h4>
            {/* <Button width="150px" height="38px" title="Sign Up"/> */}
        </div>

    </div>
  )
}

export default Navbar