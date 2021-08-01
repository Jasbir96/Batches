import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
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
  const auth = props.auth;
  const handleLogOut = () => {
    console.log('The user will sign out');
  }
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="holder-logo">
          <img className='logo' src={logo}></img>
        </Link>
        <div className="header-links full-height">
          {isLoaded(auth) && !isEmpty(auth) ?
            <ul>
              <li className="signin ">
                <Link className="  " to="/">
                  Logged in as
                </Link>
              </li>
              <li className="signin">
                <button className="text-blue btnv-3" onClick={handleLogOut}>
                  Signout
                </button>
              </li>
            </ul>
            : <LoggesOut></LoggesOut>
          }
          <ul id="nav-mid">
            <li>
              <Link className="btn-nvt-gm" to="/resume-templates">
                Resume Templates
              </Link>
            </li>
            <li className="holder-pricing">
              <Link className="btn-nvt-gm" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(authActions.signout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
