// react snippets
// rcc
import React, { Component } from 'react';
import TaskList from './TaskList';

//1.render -> static ui define
// /2. identify different variables that 
// can change throughout the life time -> state
// 3. rewrite render using those state variables
// 4. event listener to change the state
export default class Todo extends Component {
    state = {
        taskList: [],
        currTask: ""
    }
    deleteTask = (id) => {
        // current - rest of the task 
        let filteredtasks = this.state.taskList.filter(function (task) {return task.id !== id;})
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
        // let tempArr = [];
        // for (let i = 0; i < this.state.taskList.length; i++) {
        //     tempArr.push(this.state.taskList[i]);
        // }
        // tempArr.push(currTask);

        let tempArr = [...this.state.taskList, { task: currTask, id: this.state.taskList.length }]
        this.setState({
            taskList: tempArr,
            currTask: ""
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
                {/* passing props to children component */}
                <TaskList taskList={this.state.taskList}
                    deleteTask={this.deleteTask}
                ></TaskList>
            </div>
        )
    }
}

