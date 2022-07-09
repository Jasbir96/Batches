import React,{useContext} from 'react';

import { Context } from "./ContextNormal";
function GrandChild() {
    let message = useContext(Context);
    console.log("rendered grandchildren");
    return (
        <>
            <div>````````````````````````</div>
            <div>I am a grandChild</div>
            <div>God send this message {message}</div>
        </>
    )
}

export default GrandChild;