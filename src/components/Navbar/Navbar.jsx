import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { IoSearch, IoSend, IoClose } from "react-icons/io5";
import Button from '../Button/Button'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen)
    if (isSearchOpen) {
      setSearchQuery('')
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Search query:', searchQuery)
      // Handle search logic here
      setSearchQuery('')
      setIsSearchOpen(false)
    }
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className='navbar'>
      
        <div className='navLogo'>
            <img src={logo} alt="" />
            <h3>tlas Rentals</h3>
        </div>
            

        <div className='navLinks'>
            <a href="">Home</a>
            <a href="">
              Discover 
              <IoSearch 
                className={`navSearch ${isSearchOpen ? 'active' : ''}`}
                onClick={handleSearchToggle}
              />
            </a>
            <a href="">Properties</a>
            <a href="">Hosts</a>
        </div>

        
      {/* Simple Search Input */}
          <div 
            ref={searchRef}
            className={`search-dropdown ${isSearchOpen ? 'open' : ''}`}
          >
            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="search-input-container">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Search properties..."
                  className="search-input"
                  autoFocus={isSearchOpen}
                  onClick={(e) => e.stopPropagation()}
                />
                <button 
                  type="submit" 
                  className={`search-send-btn ${searchQuery.trim() ? 'active' : ''}`}
                  disabled={!searchQuery.trim()}
                >
                  <IoSend />
                </button>
              </div>
            </form>
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