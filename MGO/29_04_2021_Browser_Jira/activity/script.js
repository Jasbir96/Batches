
let filterColor = document.querySelectorAll(".filter");
// let filterColor = document.querySelectorAll(".modal-color");
let mainContainer = document.querySelector(".main-container");
let modalContainer = document.querySelector(".modal_container");
let taskBox = document.querySelector(".task_box");
let plusBtn = document.querySelector(".plus");
let modalFlag = false;
let iColor = "black";

for (let i = 0; i < filterColor.length; i++) {
    filterColor[i].addEventListener("click", function () {
        let classes = filterColor[i].getAttribute("class");
        // console.log(classes);
        let color = strArr[1];
        let mainClasses = mainContainer.getAttribute("class");
        let mainCArr = mainClasses.split(" ");
        mainCArr[1] = color;
        mainClasses = mainCArr.join(" ");
        mainContainer.setAttribute("class", mainClasses);
    })
}
plusBtn.addEventListener("click", function () {
    
    modalContainer.style.display = "flex";
})
taskBox.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && taskBox.value != "") {
        let taskContainer = document.createElement("div");
        let task = taskBox.value;
        taskContainer.setAttribute("class", "ticket_container");
        taskContainer.innerHTML = `<div class="ticket_color ${iColor}"></div>
        <div class="ticket_desc_container">
        <div class="ticket_id">#ExampleId</div>
        <div class="ticket_desc">${task}</div>
        </div>`;
        mainContainer.appendChild(taskContainer);
        // cleanup code
        modalContainer.style.display = "none";
        taskBox.value = "";

    }

})


