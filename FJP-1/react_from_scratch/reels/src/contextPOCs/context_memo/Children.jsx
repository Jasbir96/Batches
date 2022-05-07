import React from 'react';
import GrandChild from "./GrandChild";

function Children() {
    console.log("rendered children");

    return (
        <>
            <div>I am a children</div>
            <GrandChild></GrandChild>
        </>
    )
}
export default Children;