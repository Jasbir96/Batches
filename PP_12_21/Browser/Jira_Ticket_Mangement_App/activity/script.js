var uid = new ShortUniqueId();
// variables 
let colors = ["pink", "blue", "green", "black"];
let defaultColor = "black";
let cFilter = "";
let locked = false;
let deleteMode = false;
// let isLocked = false;
// elements 
let input = document.querySelector(".input_container_text");
let mainContainer = document.querySelector(".main-container");
let colorContainer = document.querySelector(".color-group_container");
let lockContainer = document.querySelector(".lock-container");
let unlockContainer = document.querySelector(".unlock-container");
let plusContainer = document.querySelector(".plus-container");
let deleteContainer = document.querySelector(".multiply-container");
let colorChooser = document.querySelector(".color_container");
let allCOlorElements = document.querySelectorAll(".color_picker");
let modal = document.querySelector(".modal");
// event Listeners
input.addEventListener("keydown", function (e) {
    if (e.code == "Enter" && input.value) {
        console.log("task Value", input.value);
        let id = uid();
        modal.style.display = "none";
        createTask(id, input.value, true);
        input.value = "";

    }
})
// filtering 
colorContainer.addEventListener("click", function (e) {
    let element = e.target;
    console.log("e.target", element);
    if (element != colorContainer) {
        let filteredCardColor = element.classList[1];
        filterCards(filteredCardColor);
    }
})
colorChooser.addEventListener("click", function (e) {
    let element = e.target;
    console.log("e.target", element);
    if (element != colorContainer) {
        let filteredCardColor = element.classList[1];
        defaultColor = filteredCardColor;
        // border change 
        for (let i = 0; i < allCOlorElements.length; i++) {
            // remove  from all
            allCOlorElements[i].classList.remove("selected");
        }
        // add
        element.classList.add("selected")
    }
})
lockContainer.addEventListener("click", function (e) {
    let numberOFElements = document.querySelectorAll(".task_main-container>div")
    for (let i = 0; i < numberOFElements.length; i++) {
        numberOFElements[i].contentEditable = false;
    }
    // ui match
    lockContainer.classList.add("active");
    unlockContainer.classList.remove("active");
})
unlockContainer.addEventListener("click", function (e) {
    let numberOFElements = document.querySelectorAll(".task_main-container>div")
    for (let i = 0; i < numberOFElements.length; i++) {
        numberOFElements[i].contentEditable = true;
    }
    lockContainer.classList.remove("active");
    unlockContainer.classList.add("active");
})
deleteContainer.addEventListener("click", function (e) {
    deleteMode = !deleteMode;
    if (deleteMode) {
        deleteContainer.classList.add("active")
    } else {
        deleteContainer.classList.remove("active")

    }
})
plusContainer.addEventListener("click", function (e) {
    modal.style.display = "flex";
})
// helpers
function createTask(id, task, flag, color) {
    // console.log("create task ran", id);
    // add to local storage
    // ticket create
    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task_container");
    mainContainer.appendChild(taskContainer);
    taskContainer.innerHTML = `<div class="task_header 
    ${color ? color : defaultColor}"></div>
            <div class="task_main-container">
                <h3 class="task_id">#${id}</h3>
                <div class="text" contentEditable="true">${task}</div>
            </div>
    `;
    // addEventListener for color changes
    let taskHeader = taskContainer.querySelector(".task_header");
    let inputTask = taskContainer.querySelector(".task_main-container>div");
    // functionality -> color change ,delete 
    // local storage 
    // color
    let nextColor;
    // ****************color change********************
    taskHeader.addEventListener("click", function () {
        // console.log("id", id);
        // console.log("color change logic");
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
        nextColor = colors[nextIdx];
        taskHeader.classList.remove(cColor);
        taskHeader.classList.add(nextColor);
        //  id -> localstorage search -> tell -> color update 
        // console.log("parent", taskHeader.parentNode);
        // console.log("taskcontainer", taskHeader.parentNode.children[1]);
        let idWalaElem = taskHeader.parentNode.children[1].children[0];
        let id = idWalaElem.textContent;
        id = id.split("#")[1];
        // console.log("id", id);
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString)
        // {id: "nDCn8Q", task: "ffdsjbdshf", color: "pink} , {}
        for (let i = 0; i < tasksArr.length; i++) {
            if (tasksArr[i].id == id) {
                tasksArr[i].color = nextColor;
                break;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasksArr));


    })
    // *************************delete********************** 
    taskContainer.addEventListener("click", function (e) {
        if (deleteMode == true) {
            // delete ->ui , storage
            // local storage -> remove;
            taskContainer.remove();

        }
    })
    inputTask.addEventListener("blur", function (e) {
        let content = inputTask.textContent;
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString)
        // {id: "nDCn8Q", task: "ffdsjbdshf", color: "pink} , {}
        for (let i = 0; i < tasksArr.length; i++) {
            if (tasksArr[i].id == id) {
                tasksArr[i].task = content;
                break;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
    })
    // local storage add 
    if (flag == true) {
        // old task
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString) || [];
        let taskObject = {
            id: id,
            task: task,
            color: defaultColor
        }
        // 1 new task
        tasksArr.push(taskObject);
        // set 
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
    }
    defaultColor = "black";
    //  unhide modal
    // appear on plus click

}
// lock -> click -> con
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
// check if any of the tasks are in local storage 
//  bring it to ui


(function () {
    // localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (let i = 0; i < tasks.length; i++) {
        let { id, task, color } = tasks[i];
        createTask(id, task, false, color);
    }
    // get it to ui
    modal.style.display = "none";
})()
// localStorage.setItem("todo", "Hello again todo");
// localStorage.setItem("todo tomorrow", "Hello again");
// localStorage.setItem("todo yesterday", "Hello again");
// let length = localStorage.length;
// console.log("length", length);
// localStorage.removeItem("todo");
// localStorage.clear();
// let item = localStorage.getItem("todo");
// console.log("item", item);
// lock/unlock features