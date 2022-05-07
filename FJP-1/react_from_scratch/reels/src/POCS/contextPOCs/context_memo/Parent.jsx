import React from 'react'
import Children from "./Children";
function Parent() {
    console.log("rendered parent");
    return (
        <>
            <div>I am a parent</div>
            <Children></Children>
        </>
    )
}
export default React.memo(Parent);