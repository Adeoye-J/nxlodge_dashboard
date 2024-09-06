import React from 'react'
import "./home.css"
import Hero from './Hero/Hero'
import featured_data from "../../data/featured_data.json"
import Lodge_Format_1 from '../Lodge_Format_1/Lodge_Format_1'


const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-content">
            <h1>Find Your Best Lodge Preference</h1>
            <div className="hero-cover">
                <Hero />
            </div>
            <div className="featured-container">
                {
                    featured_data.map((data, index) => (
                        <div key={index} className='lodge-list-container'>
                            <Lodge_Format_1 name={data.name} area={data.area} cost={data.cost} electricity={data.electricity} image={data.image} location={data.location} number_available={data.number_available} running_water={data.running_water} type={data.type}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Home