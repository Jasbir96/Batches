//  dom node 
let input = document.querySelector(".input_box");
let ul = document.querySelector(".task-list");
// let li = document.querySelector(".task");
input.addEventListener("keydown", function (e) {
    //  e object -> describe -> event 
    // console.log(" some key was pressed");
    console.log("event object", e);
    if (e.key == "Enter") {
        // console.log("user want to enter a task");
        
        let task = input.value;
        //  create any html tag 
        // console.log(task);
        let li = document.createElement("li");
        li.innerText = task;
        li.addEventListener("dblclick", function (e) {
            li.remove();
        })
        //  add any attribute 
        li.setAttribute("class", "task");
        ul.appendChild(li);
        input.value = "";
    }
});