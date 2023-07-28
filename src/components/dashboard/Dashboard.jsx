import React from 'react';
import { Link } from 'react-router-dom';
import '../dashboard/dashboard.css';
//import { RxExit } from "react-icons/rx";
function Dashboard() {
  return (
    <div>
        <br/>
        <br/>
     <div className='user'> Hello,-----</div> 
     <br/>
     <div className='texxt'>
        The dash above will display your name when the backend is being applied, for now the the frontend is fully functional.
     </div>
     <br/>
     <div><button className='logout block p-2 m-auto'><Link to="/login">Logout</Link></button></div> 
       
    </div>
  )
}

export default Dashboard