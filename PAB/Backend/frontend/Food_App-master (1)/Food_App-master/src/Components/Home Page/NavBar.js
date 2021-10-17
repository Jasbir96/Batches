import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import AuthProvider, { useAuth } from '../Context/AuthProvider';
import '../Styles/nav.css'

function NavBar() {
    // console.log(localStorage.getItem("user"));
    const { user, logout } = useAuth()
 
    useEffect(() => {
        let navBar = document.querySelector("nav");

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 0) {
                navBar.setAttribute("class", "activeNavBar")
            }
            else if ((window.pageYOffset === 0)) {
                navBar.classList.remove("activeNavBar")
            }
        });
    }, []);
    
    return (
        <nav>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allPlans">Plans</Link></li>
                    {user ?
                        <>
                            <li>
                                <Link to="/profilePage">{user?.user?.name}</Link>
                            </li>
                            <li>
                                <Link to="" onClick={logout}>Logout</Link>
                            </li>
                        </>
                        :
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
