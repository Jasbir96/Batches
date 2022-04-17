import React, { useState } from 'react'
import Genre from "./Genre";
import Movies from "./Movies";
function Main() {
    const [cGenre, setGenre] = React.useState("");
    const setGlobalGenre = (nGenre) => {
        console.log("main: " + nGenre);
        if (nGenre == "All Genre") {
            setGenre("");
        } else {

            setGenre(nGenre);
        }
    }
    return (<>
        {/* <div>Main</div> */}
        {/* <div>````````````````</div> */}
        <div className="flex">
            <Genre setGlobalGenre={setGlobalGenre}></Genre>
            <Movies
                cGenre={cGenre}
            ></Movies>
        </div>
        {/* <div>````````````````</div> */}
    </>

    )
}

export default Main