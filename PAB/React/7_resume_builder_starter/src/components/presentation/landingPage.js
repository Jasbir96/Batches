import React from 'react';
import logo from "../../static/images/resume.png";
import { Link } from "react-router-dom";
const Lp = () => {
    return (    
    
        <div className="container  lp-page center">          
        <div className="section">
         <h1>Create a resume that stands out</h1>
           <p >Create a Resume that perfectally describes your skils and match job profile.</p>
            <br></br>
           <div >
                <Link to="/getting-started"  className="btn hvr-float-shadow"><span>Get Started for Free</span>
                </Link>
                
                </div>
                <img src={logo}   className="lp-resume" alt="logo" />
         </div>        
         </div>
    
        );
}
 
export default Lp;