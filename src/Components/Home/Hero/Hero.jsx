import React from 'react'
import "./hero.css"
import { Link } from 'react-router-dom'
import {FaBuilding, FaCalendar, FaLocationArrow} from "react-icons/fa"

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="search-container">
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="input-container">
                    <div className="icon-con">
                        <FaBuilding className='icon' />
                    </div>
                    <div className="select">
                        <select name="" id="">
                            <option value="rent">Rent A Lodge</option>
                            {/* <option value="buy">Buy A Building</option> */}
                        </select>
                    </div>
                </div>

                <div className="input-container">
                    <div className="icon-con">
                        <FaCalendar className='icon' />
                    </div>
                    <div className="select">
                        <input type="date" />
                    </div>
                </div>

                <div className="input-container">
                    <div className="icon-con">
                        <FaLocationArrow className='icon' />
                    </div>
                    <div className="select">
                        <select name="" id="">
                            <option value="">Select Location</option>
                            <option value="south">South Gate</option>
                            <option value="north">North Gate</option>
                            <option value="west">West Gate</option>
                        </select>
                    </div>
                </div>
                <button>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Hero