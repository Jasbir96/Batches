import React, { useState } from 'react'

function Counter(props) {
    let { count, incrementChild } = props;
    console.log("child rendered")
    return (
        <>
            <div>`````````````````````````</div>
            <button
                onClick={incrementChild}
            >child count - {count} </button>
        </>

    )
}

export default React.memo(Counter);