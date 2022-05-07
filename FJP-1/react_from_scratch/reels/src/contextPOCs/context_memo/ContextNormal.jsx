import React, { useContext, useState } from 'react';
// same message that will not change in near future 
import Parent from "./Parent";
export let Context = React.createContext("Hello");

export default function ContextNormal() {
    const [message, setMessage] = useState("fake message");
    const changeMessage = () => {
        setMessage("Message updated");
    }
    console.log("rendered context Normal")
    return (<>
        <div>contextNormal</div>
        <button onClick={changeMessage}>Click Button</button>
        <Context.Provider value={message}>
            <Parent></Parent>
        </Context.Provider>
    </>
    )
}


