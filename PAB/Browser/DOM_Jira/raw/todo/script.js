//  event listener 
// node 
//  node properties
let inputBox = document.querySelector(".input-box");
let taskList = document.querySelector(".task-list");
let tasksArr = [];
if (localStorage.getItem("alltasks")) {
    let strArr = localStorage.getItem("alltasks");
    tasksArr = JSON.parse(strArr);
    for (let i = 0; i < tasksArr.length; i++) {
        let taskElem = document.createElement("li");
        // attribute 
        let task = tasksArr[i];
        taskElem.setAttribute("class", "task");
        taskElem.innerText = task;
        taskList.appendChild(taskElem);
        taskElem.addEventListener("dblclick", function () {
            //    remove
            console.log("Hello");
            let elem = taskElem.innerText;
            let idx = tasksArr.indexOf(elem);
            tasksArr.splice(idx, 1);
            let StrArr = JSON.stringify(tasksArr);
            localStorage.setItem("alltasks", StrArr);
            //    ui
            taskElem.remove();
        })
    }
}

// browser-> events prefined
console.log("Before");
// async code 
// console.log("ip val",inputBox.value);
inputBox.addEventListener("keypress", function (e) {
    //  event object -> that describes that event occured
    console.log("key press was called");
    // console.log("event", e);
    if (e.code == "Enter" && inputBox.value != "") {
        // page add
        let task = inputBox.value
        // create
        let taskElem = document.createElement("li");
        // attribute 
        taskElem.setAttribute("class", "task");
        taskElem.innerText = task;
        tasksArr.push(task);
        let StrArr = JSON.stringify(tasksArr);
        localStorage.setItem("alltasks", StrArr);
        //  element append
        taskList.appendChild(taskElem);
        inputBox.value = "";
        //  element features
        taskElem.addEventListener("dblclick", function () {
            //    remove
            console.log("Hello");
            let elem = taskElem.innerText;
            let idx = tasksArr.indexOf(elem);
            tasksArr.splice(idx, 1);
            let StrArr = JSON.stringify(tasksArr);
            localStorage.setItem("alltasks", StrArr);
            //    ui
            taskElem.remove();
        })
        //  task list add 
    }
})

console.log("after");