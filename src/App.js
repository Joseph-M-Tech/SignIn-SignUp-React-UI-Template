import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import BrowserRouter as Router,Routes,Route,Link to enable routers with their associative components
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login_component from './components/Login_component';
import Signup_component from './components/Signup_component';
import Password_reset from './components/Password_reset';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Joseph Mwangi
            </Link>
            <div className="collapse navbar-collapse" id="navbar-Toggler">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login_component />} />
              <Route path="/sign-in" element={<Login_component />} />
              <Route path="/sign-up" element={<Signup_component/>} />
              <Route path="/reset-password" element={<Password_reset/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
