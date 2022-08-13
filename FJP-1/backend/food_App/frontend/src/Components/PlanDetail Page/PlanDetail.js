import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../Styles/planDetail.css'
import '../Styles/contact.css'
import AuthProvider, { useAuth } from '../Context/AuthProvider';

function PlanDetail() {
    const [plan, setplan] = useState({})
    const { id } = useParams();
    const [arr, setarr] = useState();
    const [review, setreview] = useState("");
    const [rate, setrate] = useState();
    const { user } = useAuth();
    useEffect(async () => {
        const data = await axios.get(`/api/plans/${id}`)
        console.log(data.data.data);
        delete data.data.data["_id"]
        delete data.data.data["__v"]
        setplan(data.data.data)
        const reviews = await axios.get("/api/getReview/" + id);
        setarr(reviews.data.reviews)
        console.log(arr);
    }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    console.log(rate);
    const handleClick = async () => {
        console.log(123645);
        const data = await axios.post("/api/reviews", {
            "review": review,
            "rating": rate,
            "user": user.user._id,
            "plan": id
        })
        const reviews = await axios.get("/api/getReview/" + id);
        setarr(reviews.data.reviews);
    }
    const handleDelete = async() =>{
        try{
            let data = await axios.delete("/", {
                "id": id
            });
            alert(data);
        }
        catch(err){
            alert(err);
        }
    }

    return (
        <div className="pDetailBox">
            <div className='h1Box'>
                <h1 className='h1'>PLAN DETAILS</h1>
                <div className="line"></div>
            </div>
            <div className="planDetailBox">
                <div className='planDetail'>
                    <div className="loginBox">
                        {
                            Object.keys(plan).map((ele, key) => (
                                <div className='entryBox' key={key}>
                                    <div className="entryText">{capitalizeFirstLetter(ele)}</div>
                                    <div className=" input">{capitalizeFirstLetter(plan[ele].toString())}</div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className='reviewBox'>
                <div className="reviewEnrty">
                    <input type="text" value={review} onChange={(e) => setreview(e.target.value)} />
                    <select name="" id="" className="select" onChange={(e) => { setrate(e.target.value) }}>
                        <option value="5">5 Exellent</option>
                        <option value="4">4 Very Good</option>
                        <option value="3">3 Good</option>
                        <option value="2">2 Poor</option>
                        <option value="1">1 Very Poor</option>
                    </select>
                    <button className="btn" onClick={handleClick}>
                        Submit
                    </button>
                </div>
                {
                    arr && arr?.map((ele, key) => (
                        <div className="reviewsCard" key={key}>
                            <div className="pdreviews">
                                <div className="pdrdetail">
                                    <h3>{ele.user.name}</h3>
                                    <div className="input"> {ele.review}</div>
                                </div>
                                <div className='rate'>
                                    {
                                        <label htmlFor="star5" title="text">{ele.rating}</label>

                                    }
                                </div>
                            </div>

                            <div className='rcBtn'>
                                <button className="showMoreBtn btn" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default PlanDetail
