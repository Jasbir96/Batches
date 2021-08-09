import React from 'react'
import { authobj } from "../App";
function Home() {
    return (
        <>
            {authobj.isAuthenticated ?
                <div>Hello {authobj.userName}</div> : <></>}
            < div > Home Page </div >
        </>
    )
}

export default Home;
