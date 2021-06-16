import React from 'react';
import { useContext } from 'react';
// 1 context 
const Context = React.createContext("Bad Word");
// state -> default 
export default function ContextParent() {
    return (
        <div>
            <VisitFriendsHouse ></VisitFriendsHouse>
            <Context.Provider value="sweet words">
                <VisitGrandMasHouse></VisitGrandMasHouse>
            </Context.Provider>
        </div>
    )
}
function VisitFriendsHouse() {
    const language = useContext(Context);
    return (
        <>
            <h1>This is my Friends House</h1>
            <span>{language}</span>

        </>
    )
}
function VisitGrandMasHouse() {
    // const language = useContext(Context);
    return (
        <>

            <h1>This is my GrandMas House</h1>
            <Context.Provider value="mixed word">

                <WithCousions></WithCousions>
            </Context.Provider>

        </>
    )
}
function WithCousions() {
    let language = useContext(Context);
    return (
        <span>{language}</span>
    )
}