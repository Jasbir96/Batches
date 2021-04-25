let colorBtn = document.querySelectorAll(".filter_color");
let mainContainer = document.querySelector(".main_container");
let body = document.body;
let plusButton = document.querySelector(".fa-plus");


for (let i = 0; i < colorBtn.length; i++) {
    colorBtn[i].addEventListener("click", function (e) {
        let color = colorBtn[i].classList[1];
        mainContainer.style.backgroundColor = color;
    })
}
plusButton.addEventListener("click", createModal);
function createModal() {
    // create modal
    let modal_container = document.createElement("div");
    modal_container.setAttribute("class", "modal_container");
    modal_container.innerHTML = `<div class="input_container">
    <textarea class="modal_input" 
    placeholder="Enter Your text"></textarea>
</div>
<div class="modal_filter_container">
    <div class="filter pink"></div>
    <div class="filter blue"></div>
    <div class="filter green"></div>
    <div class="filter black"></div>
</div>`;
    body.appendChild(modal_container);
    //  event listner 
    handleModal(modal_container);


}

function handleModal(modal_container) {
    let cColor = "black";
    let modalFilters = document.querySelectorAll(".modal_filter_container .filter");
    // /remove previous attr new attrs
    // modalFilters[3].setAttribute("class", "border");
    // border -> black
    modalFilters[3].classList.add("border");
    for (let i = 0; i < modalFilters.length; i++) {
        modalFilters[i].addEventListener("click", function () {
            //    remove broder from elements
            modalFilters.forEach((filter) => {
                filter.classList.remove("border");
            })
            //  add
            modalFilters[i].classList.add("border")
            // modalFilters[i].classList
            //  color 
            cColor = modalFilters[i].classList[1];
            console.log("current color of task", cColor);

        })
    }
    let textArea = document.querySelector(".modal_input");
    textArea.addEventListener("keydown", function (e) {
        if (e.key == "Enter"&&textArea.value!="") {
            console.log("Task ", textArea.value, "color ", cColor);
            //  remove modal
            modal_container.remove();
            // create taskBox
            createTask(cColor, textArea.value);
        }
    })


}
function createTask(color, task) {
    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task_container");
    taskContainer.innerHTML = `<div class="task_filter ${color}"></div>
    <div class="task_desc_container">
        <h3 class="uid">#example</h3>
        <div class="task_desc">${task}</div>
    </div>
</div >`;
    mainContainer.appendChild(taskContainer);
}



