// Q5) What will be the output of the following code?.Explain the reason behind your answer.
import React, { createContext, useContext } from 'react';
export const MyContext = createContext(1);
const MyComponent = () => (
    <>
         <MyContext.Provider value={2}>
            <Pcomp></Pcomp>
         </MyContext.Provider>
        <p>{useContext(MyContext)}</p>
    </>
);

function Pcomp() {
    return (
        <p>{useContext(MyContext)}</p>
    )
}
export default MyComponent;
// UseContext accepts a context object (the value returned from React.createContext) and returns the current
// context value for that context. The current context value is determined by the value prop of the nearest 
// above the calling component in the tree. Emphasis added. The important point is that it doesn't matter where
//  you call useContext inside the component - what matters is where that component is called and where it is 
//  located in the tree.