import React from 'react'
import { Link } from 'react-router-dom'
function Reset3() {
  return (
    <>
    <div className='back'>

    
     <div className="container">
    <form>
      <h2>Reset your password.</h2>
      <div className="form-group">
        <label for="new password">New password</label>
        <input type="text" placeholder='password' name="password" required/>
      </div>
      <div className="form-group">
        <label for="password">Confirm password</label>
        <input type="password" placeholder='password' name="password" required/>
      </div>
      <div>
      <Link to="/login"><input className='log block p-2 m-auto' type="submit" value="Reset"/></Link>
      </div>
    </form>
  </div>
  </div>
    </>
  )
}

export default Reset3