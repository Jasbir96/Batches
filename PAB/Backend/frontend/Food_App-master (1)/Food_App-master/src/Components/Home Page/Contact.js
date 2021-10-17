import React from 'react';
import '../Styles/contact.css';
import Avocado from '../Images/Avocado.mp4';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className='contactCard'>
            <div className='h1Box'>
                    <h1 className='h1'>CONTACT US</h1>
                    <div className="line"></div>
                </div>
            
            <div className="cDetail"> 
                <div className="videoBox">
                    <video src={Avocado} className="video" muted='muted'
                        type='video/mp4'
                        loop
                        autoPlay />
                </div>
                
                <div className="contactInfo">
                    <div className="entry">
                        <div className="entry-text">
                            Name
                        </div>
                        <input type="text" name="Name" placeholder="Your Name" required />
                    </div>
                    <div className="entry">
                        <div className="entry-text">
                            Email
                        </div>
                        <input type="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="entry">
                        <div className="entry-text">
                            How did you find us
                        </div>
                        <select name="" id="" className="select">
                            <option value="">
                                friends
                            </option>
                            <option value="">search</option>
                            <option value="">advertsiment</option>
                            <option value="">other</option>
                        </select>
                    </div>
                    <div className="textBox">
                        <div className="entry-text">
                            Drop us a line
                        </div>
                        <textarea name="" id="" placeholder="Your Message"></textarea>
                    </div>
                    <div className="checkbox ">
                        <input type="checkbox" name="email" className="checkbox" />
                        <span className="checkbox-conditions">I have read and agree with all the Privacy Policy and
                            Terms Conditions</span>
                    </div>
                    <div className="sendBtn">
                        <Link to="#" className=" btn-full form-button">SEND</Link   >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
