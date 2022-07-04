const allColors = document.querySelectorAll(".color");
const main = document.querySelector(".main");
const addBtn = document.querySelector(".add");
const colors = ["pink", "blue", "green", "black"];
const colorBoxes = document.querySelectorAll(".color_boxes");
const lock = document.querySelector(".lock");
const unlock = document.querySelector(".unlock");
const deleteBtn = document.querySelector(".delete");
let isLocked = false;
// creation of tickets
// 1. when + is clicked then a ticket will created
addBtn.addEventListener("click", function () {
    // create a ticket
    if (isLocked == true) {
        alert("FIrst unlock it");
        return;
    }
    createTicket();
})
// *************change background -> color boxes************** 
// loop -> eventlistener add
for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener("click", filterTickets);
}
// ticket creation 
function createTicket() {
    // 2. main -> ticket add
    let id = uuidv4();
    let ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket");
    ticket.innerHTML = `
    <div class="ticket_header black"></div>
    <div class="ticket_content">
        <div class="ticket_id">
            #${id}
        </div>
        <textarea name=""></textarea>
    </div>`;
    main.appendChild(ticket);
    // ticket should have some functionalites
    // 3. change color
    // header pe click ho -> change the color
    let header = ticket.querySelector(".ticket_header");
    header.addEventListener("click", changeColor);
    // 1.
    ticket.addEventListener("click", deleteTicket);
    // diificult
}
function changeColor(e) {
    // unlock wala check 
    // e.currentTarget give the element on which event has happened
    let header = e.currentTarget;
    //    i have html element and classes can be used to identify that
    //  element and set another class to modify it's behaviour 
    // list of all the classes on an element 
    let classes = header.classList;
    let cColor = classes[1];
    // alert(cColor);
    // check idx -> next element uspe put 
    let cIdx = 0;
    for (let i = 0; i < colors.length; i++) {
        if (cColor == colors[i]) {
            cIdx = i;
            break;
        }
    }
    let nextIdx = (cIdx + 1) % colors.length;
    let nextColor = colors[nextIdx];
    // classes[1]=nextColor;

    classes.remove(cColor);
    classes.add(nextColor);

}
// ************************* helper functions
// how to toggle multiple option 
function filterTickets(e) {
    // click -> first click -> clicked
    if (isLocked == false) {
        alert("First lock it");
        return
    }
    let elem = e.currentTarget;
    let childElemArr = elem.children;
    let clickedColor = childElemArr[0].classList[1];
    // second time click -> clicked class
    let secondClass = elem.classList[1];
    if (secondClass == "clicked") {
        // removal -> show all tickets
        showAll(elem);
    } else {
        // remove clicked from every colorbox
        for (let i = 0; i < colorBoxes.length; i++) {
            // if -> elem has class -> remove
            // doesnot -> leave 
            colorBoxes[i].classList.remove("clicked");
        }
        elem.classList.add("clicked");
        //************ */ show only my color*********
        // color;
        showOnlyMYColor(clickedColor);

    }
}
function showOnlyMYColor(clickedColor) {
    // get all the ticket
    let allTickets = document.querySelectorAll(".ticket");
    // check there headings
    for (let i = 0; i < allTickets.length; i++) {
        // heading get -> color check  
        let header = allTickets[i].children[0];
        let headerColor = header.classList[1];
        if (headerColor == clickedColor) {
            // show 
            allTickets[i].style.display = "block";
        } else {
            // hide 
            allTickets[i].style.display = "none";
        }
    }
    // show only those whose color matches your cColor
}
function showAll() {
    let allTickets = document.querySelectorAll(".ticket");
    for (let i = 0; i < allTickets.length; i++) {
        // heading get -> color check  
        // show 
        allTickets[i].style.display = "block";
    }
    for (let i = 0; i < colorBoxes.length; i++) {
        // if -> elem has class -> remove
        // doesnot -> leave 
        colorBoxes[i].classList.remove("clicked");
    }
}
deleteBtn.addEventListener("click", deleteHelper)
let isDelete = false;

function deleteHelper() {
    if (isDelete == false) {
        isDelete = true;
    } else {
        isDelete = false;
    }
}
function deleteTicket(e) {
    if (isDelete == true) {
        e.currentTarget.remove();
    }
}



// lock unlock 
lock.addEventListener("click", lockHelper);
unlock.addEventListener("click", unlockHelper);
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










