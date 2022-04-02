// import
import React from 'react';
// static code 
function PrintMyName(props) {
    return <h1>My Name is {props.name} is of {props.age} years</h1>
}
// -> 4 -> My name -> Jasbir,
// jitender,
// rajneesh ,
// akash
function PrintMyNames() {
    return (
        <>
            <PrintMyName name="jasbir" age={25}></PrintMyName>
            <PrintMyName name="rajneesh" age={20}></PrintMyName>
            <PrintMyName name="jitender" age={30}></PrintMyName>
            <PrintMyName name="akash" age={40}></PrintMyName>
        </>
    )
}
// export 
export default PrintMyNames;