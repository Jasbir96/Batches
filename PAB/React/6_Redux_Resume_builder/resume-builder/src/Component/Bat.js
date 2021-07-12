import React, { useState } from 'react'

function Bat() {
    const [bat, setBat] = useState(5);
    const [value, setValue] = useState("");
    return (
        <div>
            <h1>Number of Bats-{bat}</h1>
            <input value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            ></input>
            <button onClick={() => {
                setBat(bat - value);
                setValue("");
            }}>Buy Bat</button>
        </div>
    )
}

export default Bat
