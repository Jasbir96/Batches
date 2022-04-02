import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            taskDesc: ''
        }
    }
    handleTaskTextChange(e){
        this.setState({
            taskDesc: e.target.value
        })
    }

    handleAddTaskClick(){
        this.props.handlerToCollectTaskInfo(this.state.taskDesc);
        this.setState({
            taskDesc: ''
        })
    }

    render(){
        return(
            <form>
                <input type="text" value={this.state.taskDesc} onChange={(e) => this.handleTaskTextChange(e)} />
                <input type="button" value="Add Task" onClick={() => this.handleAddTaskClick()}/>
            </form>
        )
    }
}

class TaskList extends React.Component {

   handleTaskClick(taskDesc){
        this.props.handlerToCollectTaskClickInfo(taskDesc);
   }

   render(){
        let list = [];

        for(let i = 0; i < this.props.tasks.length; i++){
            let task = this.props.tasks[i];
            let spanAction;

            if(task.isFinished){
                spanAction = (
                    <span class="material-icons" onClick={() => this.handleTaskClick(task.desc)}>close</span>
                );
            } else {
                spanAction = (
                    <span class="material-icons" onClick={() => this.handleTaskClick(task.desc)}>done</span>
                );
            }

            let listItem = (
                <div key={i}>
                    <span>{task.desc}</span>
                    {spanAction}
                </div>
            );
            list.push(listItem);
        }

        return(
            <div className={this.props.purpose == "Todo"? "todo": "finished"}>
                <div className="list-container">
                    <div className='title'>{this.props.purpose}</div>
                    <div className='content'>
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [{
                desc: 'Switch off light',
                isFinished: false
            }, {
                desc: 'Turn on fan',
                isFinished: false
            }, {
                desc: 'Make tea',
                isFinished: true
            }, {
                desc: 'Make dinner',
                isFinished: true
            }]
        }
    }

    handleNewTask(taskDesc){
        let oldTasks = this.state.tasks.slice();

        oldTasks.push({
            desc: taskDesc,
            isFinished: false
        });
        this.setState({
            tasks: oldTasks
        })
    }

    handleTaskStatusUpdate(taskDesc, newStatus){
        let oldTasks = this.state.tasks.slice();

        let taskItem = oldTasks.find(ot => ot.desc == taskDesc);
        taskItem.isFinished = newStatus;

        this.setState({
            tasks: oldTasks
        })
    }

    render(){
       let tasks = this.state.tasks;
       let todoTasks = tasks.filter(t => t.isFinished == false);
       let doneTasks = tasks.filter(t => t.isFinished == true);

       return (
           <>
              <div className="add-task">
                <AddTask handlerToCollectTaskInfo={(taskDesc) => this.handleNewTask(taskDesc)}/>
              </div>
              <div className='task-lists'>
                <TaskList handlerToCollectTaskClickInfo={(taskDesc) => this.handleTaskStatusUpdate(taskDesc, true)} tasks={todoTasks} purpose="Todo"/>
                <TaskList handlerToCollectTaskClickInfo={(taskDesc) => this.handleTaskStatusUpdate(taskDesc, false)} tasks={doneTasks} purpose="Finished"/>
              </div>
           </>
       );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

