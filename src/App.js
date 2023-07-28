//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePg from './components/homepg/HomePg';
import LoginPg from './components/L/S/pages/LoginPg';
import SignupPg from './components/L/S/pages/SignupPg';
import Reset from './components/R/pages/Reset';
import Reset2 from './components/R/pages/Reset2';
import Reset3 from './components/R/pages/Reset3';
import Reset4 from './components/R/pages/Reset4';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (

    <>
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={< HomePg/>} />
      <Route path="/login" element={< LoginPg/>} />
      <Route path="/signup" element={< SignupPg/>} />
      <Route path="/reset" element={< Reset/>} />
      <Route path="/reset2" element={< Reset2/>} />
      <Route path="/reset3" element={< Reset3/>} />
      <Route path="/reset4" element={< Reset4/>} />
      <Route path="/dash" element={< Dashboard/>} />
    </Routes>   
    </div>
    </Router>
    </>
  );
}

export default App;
