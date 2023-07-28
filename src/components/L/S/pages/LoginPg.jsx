import React from 'react'
import { Link } from 'react-router-dom'
//import { AiOutlineUser } from "react-icons/ai";
import '../pages/login.css';
//import AnimatedObject from '../../../homepg/AnimatedObject';
function LoginPg() {
  return (
    <>
    <div className='back'>
    <br/>
    {/* <div>
      <AnimatedObject/>
    </div> */}
    <br/>
    <br/>
    <div className="container">
    <form>
      <h2>Login</h2>
      <div className="form-group">
        <label for="username">Email</label>
        <input type="text" placeholder='Email' name="username" required/>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" placeholder='password' name="password" required/>
        <div className='forpass'><Link to="/reset">Forgotten password?</Link></div>
      </div>
      <div>
      <Link to="/dash"><input className='log block p-2 m-auto' type="submit" value="Login"/></Link>
      </div>
      <div className='ar'>
        <Link to="/signup">Haven't registered?</Link>
      </div>
    </form>
  </div>
    </div>
    </>
  )
}

export default LoginPg