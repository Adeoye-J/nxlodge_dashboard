// import { useState, useContext } from 'react'
import './App.css'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import Dashboard from './Pages/Dashboard/Dashboard'
import {Routes, Route} from "react-router-dom"
import { LodgeProvider } from './LodgeContext/LodgeContext'
import Home from './Components/Home/Home'
// import { useContext } from 'react'

function App() {

  // const {loggedIn, setLoggedIn} = useContext(LodgeContext)

  return (
    <>
      <LodgeProvider>
      <Dashboard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </LodgeProvider>
    </>
  )
}

export default App
