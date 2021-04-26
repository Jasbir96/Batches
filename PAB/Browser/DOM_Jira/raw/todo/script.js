//  event listener 
// node 
//  node properties
let inputBox = document.querySelector(".input-box");
let taskList = document.querySelector(".task-list");
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
        //  element append
        taskList.appendChild(taskElem);
        inputBox.value = "";
        //  element features
        taskElem.addEventListener("dblclick", function () {
            //    remove
            taskElem.remove();
        })
        //  task list add 
    }
})

console.log("after");