import React from 'react'
import { Link } from 'react-router-dom';
import "../homepg/homepg.css";
import AnimatedObject from './AnimatedObject';
function HomePg() {
  return (
    
  <div>
        <br/>
        <br/>
        <div>
          <AnimatedObject/>
        </div>
        <br/>
        <br/>
    <div>
    <button className='block p-2 m-auto bg-gray-100 rounded-lg shadow-xl text-blue-400'><Link to="/login">Login</Link></button>
    </div>
    <br/>
    <div>
    <button className='block p-2 m-auto bg-gray-200 rounded-lg shadow-xl'><Link to="/signup">Signup</Link></button>
    </div>
  </div>
  
  )
}

export default HomePg