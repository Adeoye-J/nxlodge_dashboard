import React from 'react'
import "./lodge_format_2.css"

const Lodge_Format_2 = ({name, image, cost, area, location, number_available, type, electricity, running_water}) => {
  return (
    <div className='lodge-container-2'>
        <div className="lodge-content">
            <div className="image-container">
                <img src={image} alt="lodge-image" />
            </div>
            <div className="lodge-details">
                <div className="title">
                    <p>#{cost}</p>
                    <h2>{name}</h2>
                </div>
                <div className="location">
                    <div className="icon-con">
                        <FaLocationArrow className='icon' />
                    </div>
                    <p>{location} - {area}</p>
                </div>
                <div className="other-details">
                    <p>Electricity: {electricity}</p>
                    <p>Running Water: {running_water}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lodge_Format_2