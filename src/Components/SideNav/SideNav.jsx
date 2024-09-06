import React, {useContext} from 'react'
import logo from "/images/nxlodgelogo.png"
import {Link} from "react-router-dom"
import {RiDashboardHorizontalFill, RiMessage2Fill, RiProfileFill} from "react-icons/ri"
import "./sideNav.css"
import { LodgeContext } from '../../LodgeContext/LodgeContext'

const SideNav = () => {

    const {loggedIn, setLoggedIn} = useContext(LodgeContext)

    return (
        <div className='sidenav-container'>
            <div className="sidenav-content">
                <div className="logo">
                    <img src={logo} alt="nxlodge logo" />
                </div>
                <div className="side-links">
                    <Link to={"/dashboard"} style={{textDecoration: "none"}}>
                        <div className="item">
                            <div className="icon-con">
                                <RiDashboardHorizontalFill className='icon' />
                            </div>
                            <span>Dashboard</span>
                        </div>
                    </Link>
                    <div className="item">
                        <div className="icon-con">
                            <RiDashboardHorizontalFill className='icon' />
                        </div>
                        <span>Explore</span>
                    </div>
                    <div className="item">
                        <div className="icon-con">
                            <RiDashboardHorizontalFill className='icon' />
                        </div>
                        <span>My Order</span>
                    </div>
                    <div className="item">
                        <div className="icon-con">
                            <RiMessage2Fill className='icon' />
                        </div>
                        <span>Message</span>
                    </div>
                    <div className="item">
                        <div className="icon-con">
                            <RiProfileFill className='icon' />
                        </div>
                        <span>My Profile</span>
                    </div>
                </div>

                <div className="bottom-link">
                    <Link to={"/signin"} style={{textDecoration: "none"}}>
                        <div className="item">
                            <div className="icon-con">
                                <RiDashboardHorizontalFill className='icon' />
                            </div>
                            {loggedIn ? <span onClick={() => setLoggedIn(false)}>Log Out</span> :  <span>Log In</span>}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideNav
