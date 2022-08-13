import React from 'react';
import Date from "../Images/date.png";
import Carrot from "../Images/carrot.png";
import Fast from "../Images/fast.png";
import Capture from "../Images/Capture.png";
import Review from './Review';
import Plans from './Plans';
import Contact from './Contact';
import '../Styles/home.css'

function Home() {

    return (
        <>
            <div className="bgImageCard">
                <div className='introCard'>
                    <div className="iCard">
                        <div className="headerBox">
                            <div className="header1">
                                <h1 className="hh1">MEAL PLANS.</h1>
                            </div>
                            <div className="header2">
                                <h1 className="hh1">FOR</h1>
                                <h1 className=" animateh1">EVERYONE</h1>
                            </div>
                        </div>
                        
                        <div className="btnBox">
                            <button className="bookNowBtn btn"> Book Now</button>
                            <button className="showMoreBtn btn">Show Me More</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="featureCard">
                <div className='h1Box'>
                    <h1 className='h1'>AWESOME FEATURES</h1>
                    <div className="line"></div>
                </div>
                <div className="fDetail">
                    <div className="fCard">
                        <div className='fimage'>
                            <img src={Date} className="fimg" alt="" />
                        </div>
                        <div className='fheader'>
                            <h3 className="h3">365 DAYS/YEAR</h3>
                        </div>
                        <div className='fsummary'>
                            <p className='para'>
                                Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style.
                            </p>
                        </div>
                    </div>
                    <div className="fCard">
                        <div className='fimage'>
                            <img src={Fast} alt="" className="fimg" />
                        </div>
                        <div className='fheader'>
                            <h3 className="h3">30 MINUTES OR FREE</h3>
                        </div>
                        <div className='fsummary'>
                            <p className='para'>
                                You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
                            </p>
                        </div>

                    </div>
                    <div className="fCard">
                        <div className='fimage'>
                            <img src={Carrot} alt="" className="fimg" />
                        </div>
                        <div className='fheader'>
                            <h3 className="h3">100% ORGANIC</h3>
                        </div>
                        <div className='fsummary'>
                            <p className='para'>
                                All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='stepsCard'>
                <div className='h1Box'>
                    <h1 className='h1'>STEPS TO FOLLOW</h1>
                    <div className="line"></div>
                </div>
                <div className="fDetail">
                    <div className="sbox1">
                        <img src={Capture} alt=" " className="fimg" />
                    </div>
                    <div className="sbox2">
                        <div className="stepsBox">
                            <div className="num"> 1 </div>
                            <div className="steps">
                                <p className="para">Choose the subscription plan that best fits your needs and sign up today.</p>
                            </div>
                        </div>
                        <div className="stepsBox">
                            <div className="num"> 2 </div>
                            <div className="steps">
                                <p className="para">Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                            </div>
                        </div>
                        <div className="stepsBox">
                            <div className="num"> 3 </div>
                            <div className="steps">
                                <p className="para">Enjoy your meal after less than 20 minutes. See you the next time!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Review />
            <Plans />
            <Contact />
        </>
    )
}

export default Home
