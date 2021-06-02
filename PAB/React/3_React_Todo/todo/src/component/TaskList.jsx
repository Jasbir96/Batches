import React, { Component } from 'react'
export default class TaskList extends Component {
    render() {
        return (
            <div className="task-list">
                <ul>
                    {this.props.taskList.map((taskObj) => {
                        return (
                            <li className="tasklist" key={taskObj.id}>
                                <p>{taskObj.task}</p>
                      <button onClick={this.props.deletetask(taskObj.id)}>
                                    Delete</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
