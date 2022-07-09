import './App.css';
import { useEffect, useState } from "react";

function UseffectDEMO() {
  const [list, setList] = useState([]);
  const addNewTask = (task) => {
    let copyOfList = [...list]
    copyOfList.push
      ({ task: task, id: copyOfList.length + 1 });
    // fill
    setList(copyOfList)
  }
  const deleteTask = (task) => {
    console.log("app " + task);
    let filteredList = list.filter((taskObj) => {
      return taskObj.task != task;
    })
    setList(filteredList)
  }


  return (<>
    <InputBox addNewTask={addNewTask} ></InputBox>
    <h1>----------------------------------</h1>
    <TaskList list={list} deleteTask={deleteTask}></TaskList>
  </>
  );
}

function InputBox(prop) {
  let [cInput, setInput] = useState("");
  let [count, setCount] = useState(0);
  const setcInput = (e) => {
    setInput(e.target.value)
  }
  const setFinalTask = () => {
    prop.addNewTask(cInput);
    setInput("");
  }
  // function cleanup() {
  //   console.log("I am a cleanup");
  // }
  // useEffect(() => {
  //   console.log("I will run in input");
  //   return cleanup;
  // }, [count]);

  return (<>
    <input type="text" value={cInput}
      onChange={setcInput}
    />
    <button type="button" onClick={setFinalTask}>add Task</button>

    <button onClick={() => {
      setCount(count + 1)
    }}>+</button>
    <span>{count}</span>
    <button onClick={() => {
      setCount(count - 1)
    }}
    >-</button>

  </>
  )
}

function TaskList(prop) {
  // console.log("Hello from task list");
  // no args
  // function cleanup() {
  //   console.log("I am cleanup");
  // }
  // useEffect(function () {
  //   console.log("useEffect after return is printed");
  //   return cleanup;
  // });

  // empty array
  // useEffect(function () {
  //   console.log("useEffect after return is printed");
  // }, []);
  // console.log("Hello after from task List");


  let { list, deleteTask } = prop;
  return (list.map((taskObj, idx) => {
    return (<ListItem taskObj={taskObj} deleteTask={deleteTask} key={idx}></ListItem>
    )
  })
  )
}
function ListItem(props) {
  function cleanup() {
    console.log("I am cleanup");
  }
useEffect(function () {
    console.log("useEffect after return is printed");
    return cleanup;
  }, []);

  let { taskObj, idx, deleteTask } = props;
  return (
    <div key={taskObj.id}>
      <div >{taskObj.task}</div>
      <button type="button"
        onClick={() => { deleteTask(taskObj.task) }}
      > Delete</button>
    </div>
  )

}
export default UseffectDEMO;
