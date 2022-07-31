import React from 'react';

function OutPutBox(props) {
    return (
        <React.Fragment>
            <h1>Tasks</h1>
            <ul
            >
                {/* when you have data in an array and want to print it */}
                {/*react renders html array also */}
                {props.tasks.map(function (arrElem, idx) {
                    // key is a prop that is specific to react 
                    // and to identify 
                    return (<li key={idx}>{arrElem}</li>)
                })}
            </ul>
        </React.Fragment>
    )
}

export default OutPutBox;