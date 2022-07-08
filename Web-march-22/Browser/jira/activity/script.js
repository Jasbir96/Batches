const main = document.querySelector(".main");
const addBtn = document.querySelector(".add");

// 1. when + is clicked then a ticket will created
addBtn.addEventListener("click", function () {
    // create a ticket
    if (isLocked == true) {
        alert("FIrst unlock it");
        return;
    }
    handleCreation();
})
// ticket creation 
function handleCreation() {
    // 2. main -> ticket add
    isDelete = false;
    let id = uuidv4();
    // logic creating a box -> it will exist 
    createModal(id);
}
function createModal(id) {
    let cColor = "black";
    let modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.innerHTML = `
            <textarea class="contentarea"
            placeholder="Enter some Task"
            ></textarea>
            <div class="pallet_container">
                <div class="pallet_color pink"></div>
                <div class="pallet_color blue"></div>
                <div class="pallet_color green"></div>
                <div class="pallet_color black "></div>
            </div>`;
    main.appendChild(modal);
    // color choose 
    let allColors = modal.querySelectorAll(".pallet_color");
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].addEventListener("click", function (e) {
            cColor = allColors[i].classList[1];
        })
    }
    // color code 
    modal.addEventListener("keypress", function (e) {
        let key = e.key;
        if (key == "Enter") {
            // get text, color
            let textarea = modal.querySelector("textarea");
            let text = textarea.value;
            // destory;
            modal.remove();
            // return text color
            createTicket(id, cColor, text);
        }
    })
}
function createTicket(id, color, text) {
    let ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket");
    ticket.innerHTML = `
<div class="ticket_header ${color}"></div>
<div class="ticket_content">
    <div class="ticket_id">
        #${id}
    </div>
    <textarea name="">${text}</textarea>
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



















