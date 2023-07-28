import React from 'react'
import {AiOutlineMail} from "react-icons/ai";
import { Link } from 'react-router-dom';
function Reset2() {
  return (
    <div className='r1'>
        <div>
            <AiOutlineMail className='icon-email block p-auto m-auto'/>
        </div>
        <h1>check your email</h1>
        <h3>......@gmail.com</h3>
        <h3>reset your password</h3>
        <br/>
        <button className='r1-btn'><Link to="/reset3">Resend Email</Link></button>
    </div>
  )
}

export default Reset2