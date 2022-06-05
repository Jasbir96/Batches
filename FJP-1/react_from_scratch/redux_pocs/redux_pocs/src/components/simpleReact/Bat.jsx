import React, { useState } from 'react'

function Bat() {
    const [bat, setBat] = useState(10);
    const [tosell, setTochangeBat] = useState("");
    const sellBat = () => {
        // bat ,value
        setBat(bat - tosell);

        setTochangeBat("");
    }
    const buyBat = () => {
        // bat ,value
        setBat(bat + Number(tosell));
        setTochangeBat("");
    }
    return (
        <>
            <h1>Bat</h1>
            <h2>No of Bat:{bat}</h2>
            <input type="text" value={tosell}
                onChange={(e) => {
                    let value = e.target.value;
                    // value attribute change 
                    setTochangeBat(value);
                }} />
            <button
                onClick={sellBat}
            >Sell</button>
            <button
                onClick={buyBat}
            >Buy</button>
        </>

    )
}
export default Bat