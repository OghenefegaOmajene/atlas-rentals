import React from 'react'
import logo from '../../assets/images/logo.png'
import { IoSearch, IoHeartOutline, IoLogoAppleAppstore } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div>
        <img src={logo} alt="" />

        <div className="sidebarLinks">
            <IoSearch />
            <IoHeartOutline />
            <LuHistory/>
        </div>

        <div className="sidebarLinks">
            <IoLogoAppleAppstore />
            <BiSupport />
        </div>

        <img src={avatar} alt="" />
    </div>
  )
}

export default Sidebar