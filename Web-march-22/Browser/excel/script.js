
// create grid
function init() {
    let topRow = document.querySelector(".top_row");
    // left column ke cells
    let leftCol = document.querySelector(".left_col");
    let grid = document.querySelector(".grid");
    for (let i = 1; i <= 100; i++) {
        // create a cell
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        div.textContent = i;
        leftCol.appendChild(div);
    }
    // top row ke cells
    for (let i = 1; i <= 26; i++) {
        // create a cell
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        div.textContent = String.fromCharCode(i + 64);
        topRow.appendChild(div);
    }
    // grid 
    for (let i = 0; i < 100; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j = 0; j < 26; j++) {
            let col = document.createElement("div");
            col.setAttribute("class", "cell");
            // col.textContent = `${i}-${j}`
            col.setAttribute("contenteditable", "true");
            // we have set these 2 atttributes to identify each cell 
            // without showing any change on ui 
            col.setAttribute("rid", i);
            col.setAttribute("cid", j);
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}
init();


// address bar implementation
let cells = document.querySelectorAll(".grid .cell");
// 1. cell eventlistener -> on click
for (let i = 0; i < cells.length; i++) {
    // 2. when a cell is clicked -> element
    cells[i].addEventListener("click", function (e) {
        // console.log("Event happend");
        let cCell = e.currentTarget;
        console.log(cCell);
        // 3. get rid,cid-> address me convert
        let rid = Number(cCell.getAttribute("rid"));
        let cid = Number(cCell.getAttribute("cid"));
        let address = String.fromCharCode(cid + 65) + (rid+1);
        console.log(address);
        // 4.  put it into address bar 
    })
}
