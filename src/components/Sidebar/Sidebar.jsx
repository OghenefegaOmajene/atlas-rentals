import React from 'react'
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.jpeg'
import './Sidebar.css'
import { IoSearch, IoHeartOutline, IoLogoAppleAppstore } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <img src={logo} alt="" className='sidebarLogo'/>

        <div className="sidebarLinks">
            <IoSearch />
            <IoHeartOutline />
            <LuHistory/>
        </div>

        <div className="sidebarLinks">
            <IoLogoAppleAppstore />
            <BiSupport />
            <img src={avatar} alt="" className='avatar'/>
        </div>

    </div>
  )
}

export default Sidebar