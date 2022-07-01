let allColors = document.querySelectorAll(".color");
let main = document.querySelector(".main");
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


