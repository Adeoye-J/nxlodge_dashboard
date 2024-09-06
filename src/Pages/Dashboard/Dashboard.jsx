import React, { useContext } from 'react'
import "./dashboard.css"
import SideNav from '../../Components/SideNav/SideNav'
import TopNav from '../../Components/TopNav/TopNav'
import Home from '../../Components/Home/Home'
import { LodgeContext } from '../../LodgeContext/LodgeContext'

const Dashboard = () => {

  const {menuView} = useContext(LodgeContext)

  return (
    <div className='dashboard-container'>
      {menuView && 
        <div className="side-nav">
          <SideNav />
        </div>
      }
      <div className={`top-nav ${!menuView && "occupy"}`}>
        <TopNav />
      </div>
    </div>
  )
}

export default Dashboard