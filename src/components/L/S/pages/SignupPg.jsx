import React from 'react';
import { Link } from 'react-router-dom';

function SignupPg() {
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
      <h2>Signup</h2>
      <div className="form-group">
        <label for="username">Name</label>
        <input type="text" placeholder='Name' name="username" required/>
      </div>
      <div className="form-group">
        <label for="username">Email</label>
        <input type="text" placeholder='Email' name="username" required/>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" placeholder='password' name="password" required/>
      </div>
      <div>
        <Link to="/login"><input className='log block p-2 m-auto' type="submit" value="Signup"/></Link>
      </div>
      <div className='ar'>
        <Link to="/login">Already registered?</Link>
      </div>
    </form>
  </div>
    </div>
    </>
  )
}

export default SignupPg