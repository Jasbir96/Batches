var uid = new ShortUniqueId();
let input = document.querySelector(".task_input");
let mainContainer = document.querySelector(".main-container");
let colors = ["pink", "blue", "green", "black"];
let defaultColor = "black";
let cFilter = "";
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
    taskContainer.innerHTML = `<div class="task_header 
    ${defaultColor}"></div>
            <div class="task_main-container">
                <h3 class="task_id">#${id}</h3>
                <div class="text" contentEditable="true">${task}</div>
            </div>
    `;
    // addEventListener for color changes
    let taskHeader = taskContainer.querySelector(".task_header");
    taskHeader.addEventListener("click", function () {
        //    class -> change 
        // get all the classes on an element
        // console.log(taskHeader.classList);
        let cColor = taskHeader.classList[1];
        // let cColor = window
        //     .getComputedStyle(taskHeader)
        //     .backgroundColor;
        // next color
        // element.style.backgroundColor = nextColor;

        // console.log("cColor", cColor);
        let idx = colors.indexOf(cColor);
        let nextIdx = (idx + 1) % 4;
        let nextColor = colors[nextIdx];
        taskHeader.classList.remove(cColor);
        taskHeader.classList.add(nextColor);
    })
}


// filtering 
let colorContainer = document.querySelector(".color-group_container");
colorContainer.addEventListener("click", function (e) {
    let element = e.target;
    console.log("e.target",element);
    if (element != colorContainer) {
        let filteredCardColor = element.classList[1];
        filterCards(filteredCardColor);
    }
})
// console.log(colorBtns);
// for (let i = 0; i < colorBtns.length; i++) {
//     colorBtns[i].addEventListener("click", function () {
//         let filteredCardColor = colorBtns[i].classList[1];
//         console.log(filteredCardColor);
//         filterCards(filteredCardColor);
//     })
// }
function filterCards(filterColor) {
    let allTaskCards =
        document.querySelectorAll(".task_container");
    if (cFilter != filterColor) {
        for (let i = 0; i < allTaskCards.length; i++) {
            // header color -> 
            let taskHeader = allTaskCards[i]
                .querySelector(".task_header");
            let taskColor = taskHeader.classList[1];
            if (taskColor == filterColor) {
                // show 
                allTaskCards[i].style.display = "block"
            } else {
                // hide 
                allTaskCards[i].style.display = "none"
            }
        }
        cFilter = filterColor;
    } else {
        cFilter = "";
        for (let i = 0; i < allTaskCards.length; i++) {    
                allTaskCards[i].style.display = "block"    
    }
    }
}


