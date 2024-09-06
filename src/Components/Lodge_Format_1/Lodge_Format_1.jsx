import React from 'react'
import "./lodge_format_1.css"
import {FaLocationArrow, } from "react-icons/fa"
// import {Ri} from "react-icons/ri"

const Lodge_Format_1 = ({name, image, cost, area, location, number_available, type, electricity, running_water}) => {
  return (
    <div className='lodge-container'>
        <div className="lodge-content">
            <div className="image-container">
                <img src={image} alt="lodge-image" />
            </div>
            <div className="lodge-details">
                <div className="title">
                    <h2>{name}</h2>
                    <p>#{cost}/yr</p>
                </div>
                <div className="location">
                    <div className="icon-con">
                        <FaLocationArrow className='icon' />
                    </div>
                    <p>{location} - {area}</p>
                </div>
                <div className="other-details">
                    <p>{type}</p>
                    <p>Electricity: {electricity}</p>
                    <p>Running Water: {running_water}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lodge_Format_1