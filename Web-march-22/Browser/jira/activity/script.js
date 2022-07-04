const main = document.querySelector(".main");
const addBtn = document.querySelector(".add");

// 1. when + is clicked then a ticket will created
addBtn.addEventListener("click", function () {
    // create a ticket
    if (isLocked == true) {
        alert("FIrst unlock it");
        return;
    }
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
        <div class="ticket_id">
            #${id}
        </div>
        <textarea name=""></textarea>
    </div>`;
    main.appendChild(ticket);

    // 3. change color
    // header pe click ho -> change the color
    let header = ticket.querySelector(".ticket_header");
    header.addEventListener("click", changeColor);
    // delete 
    ticket.addEventListener("click", deleteTicket);

}
function changeColor(e) {
    // e.currentTarget give the element on which event has happened
    if (isLocked == true) {
        alert("FIrst unlock it");
        return;
    }
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
function deleteTicket(e) {
    if (isDelete == true && isLocked == false) {
        e.currentTarget.remove();
    }
}



















