import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/images/logo.png'
import { FaMicrophone } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const searchRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      <div className='navLogo'>
        <img src={logo} alt="" />
        <h3>tlas Rentals</h3>
      </div>

      <div className="navLinks">
        <a href="">Home</a>
        <a href="" onClick={(e) => e.preventDefault()}>
          Discover
          <IoSearch
            className="navSearch"
            onClick={() => setShowSearch(!showSearch)}
          />
        </a>
        <a href="">Properties</a>
        <a href="">Hosts</a>
      </div>

      {showSearch && (
        <div
          ref={searchRef}
          className={`searchBox ${expanded ? "expanded" : "bouncy"}`}
        >
          {/* Top filters */}
          {expanded && (
            <div className="searchFilters">
              <button className="active">Rent</button>
              <button>Buy</button>
              <div className="filters">
                <span>Location ▼</span>
                <span>Bedrooms ▼</span>
                <span>Price ▼</span>
              </div>
              <IoMdClose
                className="closeBtn"
                onClick={() => {
                  setShowSearch(false);
                  setExpanded(false);
                }}
              />
            </div>
          )}

          {/* Input field */}
          <div className="searchInputWrapper">
            <input
              type="text"
              className="searchInput"
              placeholder="Ask AI to find your perfect home..."
              onFocus={() => setExpanded(true)}
            />
            {expanded && (
              <div className="searchActions">
                <span className="rating">+ 4.1 ▼</span>
                <FaMicrophone />
                <button className="sendBtn">
                  <IoIosArrowUp />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className='navBtn'>
        <button className='navBtnBtn'>Log In</button>
        <h4>Become a host</h4>
      </div>
    </div>
  );
};

export default Navbar;


// import React, {useState, useRef, useEffect} from 'react'
// import './Navbar.css'
// import logo from '../../assets/images/logo.png'
// import { IoSearch } from "react-icons/io5";

// const Navbar = () => {
  
//   return (
//     <div className='navbar'>
      
//         <div className='navLogo'>
//             <img src={logo} alt="" />
//             <h3>tlas Rentals</h3>
//         </div>
            

//         <div className='navLinks'>
//             <a href="">Home</a>
//             <a href="">
//               Discover 
//               <IoSearch className='navSearch'/>
//             </a>
//             <a href="">Properties</a>
//             <a href="">Hosts</a>
//         </div>

//         <div className='navBtn'>
//             <button className='navBtnBtn'>Log In</button>
//             <h4>Become a host</h4>
//         </div>

//     </div>
//   )
// }

// export default Navbar