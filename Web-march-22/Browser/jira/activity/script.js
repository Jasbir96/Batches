const allColors = document.querySelectorAll(".color");
const main = document.querySelector(".main");
const addBtn = document.querySelector(".add");
const colors = ["pink", "blue", "green", "black"];

// for (let i = 0; i < allColors.length; i++) {
//     allColors[i].addEventListener("click", changeColor)
// }
// // e-> is the object that will be given by browser
// function changeColor(e) {
//     // e.currentarget -> refers the element on which event has 
//     // occurred
//     let elem = e.currentTarget;
//     // all the classes present on the element 
//     let allclasses = elem.classList;
//     let color = allclasses[1];
//     console.log(color);
//     main.style.backgroundColor = color;
//     // console.log(elem, " ", allclasses);
// }
console.log("uuid", uuidv4());

// creation of tickets

// 1. when + is clicked then a ticket will created
addBtn.addEventListener("click", function () {
    // create a ticket 
    createTicket();
})





// ticket creation 
function createTicket() {
    // 2. main -> ticket add
    let id = uuidv4();
    let ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket");
    ticket.innerHTML = `
    <div class="ticket_header black"></div>
    <div class="ticket_content">
        <div class="ticket_id ">
            #${id}
        </div>
        <textarea name=""></textarea>
    </div>
`;
    main.appendChild(ticket);
    // ticket should have some functionalites

    // 3. change color
    // header pe click ho -> change the color
    let header = ticket.querySelector(".ticket_header");
    header.addEventListener("click", changeColor)
    // 4. lock and unlock,color filtering 
    // diificult
}
function changeColor(e) {
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



// *************change background -> color boxes************** 
let colorBoxes = document.querySelectorAll(".color_boxes");
// loop -> eventlistener add
for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener("click", filterTickets);
}
// how to toggle multiple option 
function filterTickets(e) {
    // click -> first click -> clicked
    let elem = e.currentTarget;
    let childElemArr = elem.children;
    let clickedColor = childElemArr[0].classList[1];
    // second time click -> clicked class
    let secondClass = elem.classList[1];
    if (secondClass == "clicked") {
        elem.classList.remove("clicked");
        // removal -> show all tickets
        showAll();
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
}







