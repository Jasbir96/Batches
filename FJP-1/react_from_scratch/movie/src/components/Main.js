import React from 'react'
import Genre from "./Genre";
import Movies from "./Movies";
function Main() {
    return (<>
        {/* <div>Main</div> */}
        {/* <div>````````````````</div> */}
        <div className="flex">
        <Genre></Genre>
        <Movies></Movies>
        </div>
        {/* <div>````````````````</div> */}
    </>

    )
}

export default Main