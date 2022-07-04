// loop -> eventlistener add
const allColors = document.querySelectorAll(".color");

const colors = ["pink", "blue", "green", "black"];
const colorBoxes = document.querySelectorAll(".color_boxes");
for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener("click", filterTickets);
}
function filterTickets(e) {
    // click -> first click -> clicked
    if (isLocked == false) {
        alert("First lock it");
        return
    }
    // color option get  -> 
    let elem = e.currentTarget;
    let childElemArr = elem.children;
    let clickedColor = childElemArr[0].classList[1];

    // second time click -> clicked class
    let secondClass = elem.classList[1];
    if (secondClass == "clicked") {
        // removal -> show all tickets
        showAll(elem);
    } else {
        // remove clicked from every any previorously clicked colorbox
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