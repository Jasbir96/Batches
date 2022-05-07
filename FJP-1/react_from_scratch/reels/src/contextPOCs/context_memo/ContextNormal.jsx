import React, { useContext, useState } from 'react';
// same message that will not change in near future 
let Context = React.createContext("Hello");
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
function Parent() {
    console.log("rendered parent");
    return (
        <>
            <div>I am a parent</div>
            <Children></Children>
        </>
    )
}
function Children() {
    console.log("rendered children");

    return (
        <>
            <div>I am a children</div>
            <GrandChild></GrandChild>
        </>
    )
}
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
