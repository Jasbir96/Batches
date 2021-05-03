let filterOptions = document.querySelectorAll(".filter-colors__container");
let modalFilters = document.querySelectorAll(".modal_filters");
let mainContainer = document.querySelector(".main-container");
let modalContainer = document.querySelector(".modal_container");
let addBtn = document.querySelector(".add");
let descBox = document.querySelector(".desc-box");
let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let flag = false;
let cColor = colors[colors.length - 1];

// for (let i = 0; i < filterOptions.length; i++) {
//     filterOptions[i].addEventListener("click", function () {
//         let arr = filterOptions[i].children;
//         // present classes
//         // console.log(arr[1]);
//         let chclassesArr = arr[0].classList;

//         // console.log(classesArr[1]);
//         mainContainer.style.backgroundColor = chclassesArr[0];
//     });
// }
addBtn.addEventListener("click", function () {
    if (flag == false) {
        modalContainer.style.display = "flex";
    } else {
        modalContainer.style.display = "none";
    }
    flag = !flag
});
for (let i = 0; i < modalFilters.length; i++) {
    modalFilters[i].addEventListener("click", function () {
        modalFilters.forEach(function (modalFilter) {
            // classList remove-> 
            modalFilter.classList.remove("border");
        })
        modalFilters[i].classList.add("border");
        cColor = modalFilters[i].classList[1];
    })
}
// text area 
descBox.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        let task = descBox.value;
        console.log("task is ", task, "cColor ", cColor);

        // tiket create 
        // ticket create 
        createTicket(task, cColor);
        //  clean up 
        
        cColor = colors[colors.length - 1];
        modalContainer.style.display = "none";
        flag = false;
        descBox.value = "";
    }
})

function createTicket(task, cColor) {
    //      <div class="ticket-container">
    //     <div class="ticket-color"></div>
    //     <div class="ticket_sub-container">
    //         <h3 class="ticket-id">#sampleId</h3>
    //         <p class="ticket-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aspernatur.</p>
    //     </div>
    // </div>

    let ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-container");
    ticketContainer.innerHTML = `<div class="ticket-color ${cColor}"></div>
       <div class="ticket_sub-container">
             <h3 class="ticket-id">#sampleId</h3>
             <div class="ticket-desc">${task}</div>
         </div>`;
    mainContainer.appendChild(ticketContainer);
    let colorStripElement = ticketContainer.querySelector(".ticket-color");
    handleTicket(colorStripElement);
}
function handleTicket(colorStripElement) {
    colorStripElement.addEventListener("click", function () {
        let classes = colorStripElement.classList;
        let initColor = classes[1];
        let idx = colors.indexOf(initColor);
        let newidx = (idx + 1) % 4;
        let newColor = colors[newidx];
        colorStripElement.classList.remove(initColor);
        colorStripElement.classList.add(newColor);
    })
}
