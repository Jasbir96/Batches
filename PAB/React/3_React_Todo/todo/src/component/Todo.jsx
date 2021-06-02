// react snippets
// rcc
import React, { Component } from 'react';
//1.render -> static ui define
// /2. identify different variables that 
// can change throughout the life time -> state
// 3. rewrite render using those state variables
// 4. event listener to change the state
export default class Todo extends Component {
    state = {
        taskList: ["Task-1", "Task-2", "Task-3", "Task4"],
        currTask: ""
    }
    deleteTask = (cTask) => {
        // current - rest of the task 
        let filteredtasks = this.state.taskList
            .filter(function (task) {
                return task !== cTask;
            })
        this.setState({
            taskList: filteredtasks
        });
    }
    handleCurrTask = (e) => {
        let currValue = e.target.value;
        this.setState({
            currTask: currValue
        })

    }
    addTask = () => {
        let currTask = this.state.currTask;
        // let tempArr = this.state.taskList;
        // for (let i = 0; i < this.state.taskList.length; i++) {
        //     tempArr.push(this.state.taskList[i]);
        // }
        // tempArr.push(currTask);
        let tempArr = [...this.state.taskList, currTask]
        this.setState({
            taskList: tempArr,
            currTask:""
        })
    }
    render() {
        return (
            <div>
                <div className="input-container">
                    <input type="text" value={this.state.currTask}
                    onChange={this.handleCurrTask} />
                    <button onClick={this.addTask}>submit</button>
                </div>
                <div className="task-list">
                    <ul>
                        {this.state.taskList.map((task) => {
                            return (
                                <li className="tasklist">
                                    <p>{task}</p>
                                    <button onClick={() => 
                                        { this.deleteTask(task) }}>
                                        Delete</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

