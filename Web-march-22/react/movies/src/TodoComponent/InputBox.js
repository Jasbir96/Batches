import React from 'react';
function InputBox(props) {
    {/* controlled component */ }
    let [value, changeValue] = React.useState("");
    function setInput(e) {
        let inputValue = e.target.value;
        // change value is used to update value state variable 
        changeValue(inputValue);
        //  when will it change after calling ?? -> you tell definetly 
    }
    function addTaskFromInput() {
        props.addTask(value);
        changeValue("");
    }
    return (
        <React.Fragment>
            <input type="Text"
                // set 
                value={value}
                //update 
                onChange={setInput}
            />
            <button onClick={addTaskFromInput}>Add Task</button>
        </React.Fragment>
    )
}
export default InputBox;
