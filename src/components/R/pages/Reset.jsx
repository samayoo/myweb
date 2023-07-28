import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/reset.css'
function Reset() {
  return (
    <>
    
    <div className='r1'>
        <h1>Reset your password</h1>
        <h3>Enter your email and will send you a link to reset your password.</h3>
        <br/>
        <input className='ins' type="text" placeholder='Enter your email' required/>
        <br/>
        <br/>
        <button className='r1-btn'><Link to="/reset2">Continue</Link></button>
    </div>
    </>
  )
}

export default Reset