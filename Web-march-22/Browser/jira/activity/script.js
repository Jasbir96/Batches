const allColors = document.querySelectorAll(".color");
const main = document.querySelector(".main");
const addBtn = document.querySelector(".add");

for (let i = 0; i < allColors.length; i++) {
    allColors[i].addEventListener("click", changeColor)
}
// e-> is the object that will be given by browser
function changeColor(e) {
    // e.currentarget -> refers the element on which event has 
    // occurred
    let elem = e.currentTarget;
    // all the classes present on the element 
    let allclasses = elem.classList;
    let color = allclasses[1];
    console.log(color);
    main.style.backgroundColor = color;
    // console.log(elem, " ", allclasses);
}


console.log("uuid", uuidv4());

// creation of tickets

// 1. when + is clicked then a ticket will created
addBtn.addEventListener("click", function () {
    // create a ticket 
    createTicket();
})

function createTicket() {
    // 2. main -> ticket add
    let id = uuidv4();
    let ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket");
    ticket.innerHTML = `
    <div class="ticket_header"></div>
    <div class="ticket_content">
        <div class="ticket_id">
            #${id}
        </div>
        <textarea name=""></textarea>
    </div>
`;
    main.appendChild(ticket);
    // ticket should have some functionalites
    // 3. change color

    // 4. lock and unlock

}





