import React from 'react'
import logo from "/images/nxlodgelogo.png"
import ForgotPasswordImage from "/images/lodge_3.png"
import "./forgotPassword.css"
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='forgot-password-container'>
            <div className="login-nav section-spacing">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <p>Login</p>
            </div>
            <div className="image-container">
                <div className="image-content">
                    <img src={ForgotPasswordImage} alt="Sign In Lodge Pic" />
                </div>
                <h1>Find your desired lodge</h1>
                <p>Schedule in just a few clicks</p>
            </div>
            <div className="login-container">
                <div className="login-content">
                    <h1>Forgot Password</h1>
                    <p>Enter your email account to reset your password</p>
                    <form action="" className="login">
                        <div className="input-container">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" placeholder='Enter Email'/>
                        </div>
                        <div className="action">
                            <button>Reset Password</button>
                        </div>
                    </form>
                    <div className="redirection">
                        <p>Remember Password? <Link to={"/signin"}>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ForgotPassword
