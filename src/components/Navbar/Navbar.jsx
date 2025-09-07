import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoSend } from "react-icons/io5";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  // Auto-focus when search opens
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setExpanded(false);
    setQuery("");
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  const handleSend = () => {
    if (!query.trim()) return;
    console.log("Searching / Sending Query:", query);
    // send to backend or handle AI logic
    setQuery("");
    setExpanded(false);
    setShowSearch(false);
  };

  return (
    <div className="navbar">
      <div className="navLogo">
        <img src={logo} alt="" />
        <h3>tlas Rentals</h3>
      </div>

      <div className="navLinks">
        <a href="">Home</a>
        <a href="">
          Discover
          <IoSearch className="navSearch" onClick={handleSearchClick} />
        </a>
        <a href="">Properties</a>
        <a href="">Hosts</a>
      </div>

      <div className="navBtn">
        <button className="navBtnBtn">Log In</button>
        <h4>Become a host</h4>
      </div>

      {/* Chatbot-style Search */}
      {showSearch && (
        <div className={`searchContainer ${expanded ? "expanded" : ""}`}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your search..."
            value={query}
            onChange={handleInputChange}
            className="searchInput"
          />
          <button className="sendBtn" onClick={handleSend}>
            <IoSend />
          </button>
        </div>
      )}
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