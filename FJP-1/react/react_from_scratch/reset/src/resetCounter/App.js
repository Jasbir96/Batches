import './App.css';
import React from 'react'

import Reset from "./components/Reset";
import CounterGroup from "./components/CounterGroup";
function App() {
  let [globalCounterNum, setGlobalCounterNum] = React.useState("");
  let [globalCounterVal, setGlobalCounterVal] = React.useState("");
  function getResetData(countNumber, countVal) {
    console.log("App" + " : " + countNumber + " : " + countVal);
    setGlobalCounterNum(countNumber);
    setGlobalCounterVal(countVal);
  }
  function resetGlobals() {
    setGlobalCounterNum("");
    setGlobalCounterVal("");
  }
  return (<>
    <Reset getResetData={getResetData}></Reset>
    <CounterGroup
      globalCounterNum={globalCounterNum}
      globalCounterVal={globalCounterVal}
      resetGlobals={resetGlobals}
    ></CounterGroup>
  </>
  );
}

export default App;
