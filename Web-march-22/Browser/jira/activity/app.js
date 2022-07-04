// ui elments 
const lock = document.querySelector(".lock");
const unlock = document.querySelector(".unlock");
const deleteBtn = document.querySelector(".delete");

// variables 
let isLocked = false;
let isDelete = false;
// lock unlock 
lock.addEventListener("click", lockHelper);
unlock.addEventListener("click", unlockHelper);
deleteBtn.addEventListener("click", deleteHelper)

function lockHelper(e) {
    // lock -> click
    isLocked = true;
    // edit -> disable
    disableEdit();
}
function unlockHelper(e) {
    isLocked = false;
    showAll();
    // edit -> enable 
    enableEdit();
}
function deleteHelper() {
    if (isDelete == false) {
        isDelete = true;
    } else {
        isDelete = false;
    }
}


function disableEdit() {
    let allTickets = document.querySelectorAll(".ticket");
    for (let i = 0; i < allTickets.length; i++) {
        // heading get -> color check 
        let textarea = allTickets[i].querySelector("textarea");
        textarea.setAttribute("readonly", "");
    }
}
function enableEdit() {
    // get all the ticket
    let allTickets = document.querySelectorAll(".ticket");
    // check there headings
    for (let i = 0; i < allTickets.length; i++) {
        // heading get -> color check 
        let textarea = allTickets[i].querySelector("textarea");
        textarea.removeAttribute("readonly", "");
    }
}
function showAll() {
    let allTickets = document.querySelectorAll(".ticket");
    for (let i = 0; i < allTickets.length; i++) {
        allTickets[i].style.display = "block";
    }
    for (let i = 0; i < colorBoxes.length; i++) {
        // if -> elem has class -> remove
        // doesnot -> leave 
        colorBoxes[i].classList.remove("clicked");
    }
}



