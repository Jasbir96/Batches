import React from 'react';

import OutPutBox from "./OutputBox";
import InputBox from "./InputBox";
function Todo() {  // store these li's into an array
    let [tasks, setTasks] = React.useState([]);
    function addTask(value) {
        // copy data from original
        let newTaskArr = [...tasks];
        if (value == "") {
            alert("Kindly enter some task");
            return;
        }
        newTaskArr.push(value);
        setTasks(newTaskArr);
    }
    return (
        <React.Fragment>
            <h1>Todo App</h1>
            <InputBox addTask={addTask} />
            <OutPutBox tasks={tasks} />
        </React.Fragment>)
}
export default Todo;
