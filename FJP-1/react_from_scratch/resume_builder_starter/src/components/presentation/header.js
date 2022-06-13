import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";

function LoggesOut(props) {
  return (
    <ul>
      <li className="signup ">
        <NavLink className=" btnv-1" to="/register">
        Register
        </NavLink>
      </li>
      <li className="signin"> 
        <NavLink className="text-blue btnv-3" to="/login">
        Sign In
        </NavLink>         
      </li>
    </ul>
  )
}

const Header = (props) => {
  // const auth = props.auth;
  const handleLogOut=()=>{
   console.log('The user will sign out');
  }

  return (  
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        <img className='logo' src={logo}></img>
      </a> 
        <div className="header-links full-height">

       
          <ul>
            <li className="signin ">
              <NavLink className="  " to="/">
               Logged in as 
              </NavLink>
            </li>
            <li className="signin"> 
              <button className="text-blue btnv-3" onClick={handleLogOut}>
             Signout
              </button>         
            </li>
          </ul>
          <ul id="nav-mid">
            <li>
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
            
      </div>   
    </nav>
  </header>

  );
};

export default Header;
