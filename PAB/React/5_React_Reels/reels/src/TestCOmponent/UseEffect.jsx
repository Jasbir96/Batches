import React, { useEffect, useState } from 'react';
export default function UseEffect() {
    let [task, setCTask] = useState("");
    let [taskList, setTaskList] = useState([]);
    const addTask = () => {
        let newTaskList = [...taskList];
        newTaskList.push({
            task: task,
            id: Date.now()
        })
        setTaskList(newTaskList);
        setCTask("");
    }

    const handleDelete = (id) => {
        // let newTaskList = [...taskList];
        let newTaskList = taskList.filter((taskObj) => {
            return taskObj.id != id;
        })
        setTaskList(newTaskList);
    }
    return (
        <div>
            Todo Example
            <input type="text" value={task} onChange={(e) => { setCTask(e.target.value) }} />
            <button onClick={addTask}>AddTask</button>

            <ul>
                {
                    taskList.map((taskObj) => {
                        return (
                            <ListItem taskObj={taskObj} handleDelete={handleDelete}></ListItem>
                        )
                    })
                }
            </ul>
        </div>
    )
}
function ListItem(props) {
    let { taskObj, handleDelete } = props;
    useEffect(function () {
        alert("I will run ");
        // dependent -> finish run 
        return () => {
            alert(taskObj.task);
        }
    }, );
    return (
        <li key={taskObj.id} onClick={() => {
            handleDelete(taskObj.id)
        }}>{taskObj.task}</li>
    )
}


