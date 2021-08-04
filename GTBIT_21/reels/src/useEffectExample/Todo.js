import React, { useState, useEffect } from 'react';
function Todo() {
    const [value, setValue] = useState("");
    const [taskList, setTaskList] = useState([]);
    const setTask = function () {
        // /
        let newTaskList = [...taskList];
        newTaskList.push({
            id: Date.now(),
            task: value
        })
        setTaskList(newTaskList);
        setValue("");
    }
    const removeTask = function (id) {
        let restOftasks = taskList.filter(function (taskObject) {
            return taskObject.id != id;
        })
        setTaskList(restOftasks);
    }
    // function cleanup() {
    //     // clean up 
    //     console.log("Main cleanUp");
    // }
    // function c1() {
    //     console.log("other work")
    // }
    //    empty dependency array -> it will run only once just after first render 
    // useEffect(() => {
    //     console.log("use effect of todo ran");
    // }, [])
    //  cdm+csu with dependency  -> useEffect with a dependency array 
    // dependency array cleanup fn -> run before next useEffect
    // useEffect(() => {
    //     console.log("use effect with dependency array");
    //     return cleanup;
    // }, [taskList])
    // without any dependency array =>
    //  I will always run whenever there is any change of state  
    // cdm +cdu
    // cleanup function before every next useEffect 
    // useEffect(() => {
    //     console.log("I will always run whnever there is any change of state ")
    //     return c1;
    // });
    return (
        <>
            <div>
                <input type="text" placeholder="Input Task" value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}></input>
                <button onClick={setTask}>Add Task </button>
            </div>
            {taskList.map((taskObj) => {
                return (
                    <Task key={taskObj.id} id={taskObj.id} task={taskObj.task}
                        removeTask={removeTask}></Task>)
            })}
        </>
    )
}
function Task(props) {
    let { id, task, removeTask } = props;
    useEffect(() => {
        console.log("Task list useEffect ran ", task);
        // component will unmount
        return function () {
            console.log(task, "removed");
        }
    }, []);
    return (

        <li
            onClick={() => {
                removeTask(id)
            }}
        >
            {task}
        </li>
    )
}
export default Todo
