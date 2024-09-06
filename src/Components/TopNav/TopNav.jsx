import React, { useContext } from 'react'
import {FaSearch, FaBell} from "react-icons/fa"
import {RiMenu3Fill} from "react-icons/ri"
import profile from "/images/profile.jpg"
import "./topNav.css"
import { LodgeContext } from '../../LodgeContext/LodgeContext'

const TopNav = () => {

    const {menuView, setMenuView} = useContext(LodgeContext)

    const handleMenu = () => {
        setMenuView(!menuView)
    }

    return (
        <div className='topnav-container'>
            <RiMenu3Fill className='nav-icon' onClick={handleMenu} />
            <div className="topnav-content">
                <div className="search-container">
                    <FaSearch className='icon' />
                    <input type="text" placeholder='Search here ...' />
                </div>
                <div className="profile-notif">
                    <div className="icon-con">
                        <FaBell className='icon' />
                    </div>
                    <div className="profile-image">
                        <img src={profile} alt="profile image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav