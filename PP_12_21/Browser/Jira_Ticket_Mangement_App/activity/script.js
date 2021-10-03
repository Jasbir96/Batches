var uid = new ShortUniqueId();
let input = document.querySelector(".task_input");
let mainContainer = document.querySelector(".main-container");
input.addEventListener("keydown", function (e) {
    if (e.code == "Enter" && input.value) {
        console.log("task Value", input.value);
        let id = uid();
        createTask(id, input.value);
        input.value = "";
    }
})
function createTask(id, task) {
    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task_container");
    mainContainer.appendChild(taskContainer);
    taskContainer.innerHTML =`<div class="task_header"></div>
            <div class="task_main-container">
                <h3 class="task_id">#${id}</h3>
                <div class="text">${task}</div>
            </div>`

}



