import React from 'react'

const ContextMessage = React.createContext();
function Context() {
    return (
        <ContextMessage.Provider value="Be safe">
            <GrandParent></GrandParent>
        </ContextMessage.Provider>
    )
}

function GrandParent() {
    return <>
        <div>GrandParent</div>
        <div>⬇</div>

        <Parent></Parent>
    </>

}
function Parent() {
    return <>
        <div>Parent</div>
        <div>⬇</div>
        <Child></Child>
    </>
}


function Child() {
    let message = React.useContext(ContextMessage);
    return <>
        <div>child</div>
        <div>Children say's Hi</div>
        <div>GrandPa say's {message}</div>
    </>
}
export default Context;