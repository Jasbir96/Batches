let leftCol = document.querySelector(".left_col");
let topRow = document.querySelector(".top_row");
let grid = document.querySelector(".grid");
// current clicked cell address 
let addressInput = document.querySelector(".address-input");
let boldBtn = document.querySelector(".bold");
let underlineBtn = document.querySelector(".underline");
let italicBtn = document.querySelector(".italic");
let rows = 100;
let cols = 26;
// left_col
for (let i = 0; i < rows; i++) {
    let colBox = document.createElement("div");
    colBox.innerText = i + 1;
    colBox.setAttribute("class", "box");
    leftCol.appendChild(colBox);
}
// top_row
for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div");
    cell.innerText = String.fromCharCode(65 + i);
    // setAttribute
    cell.setAttribute("class", "cell");
    topRow.appendChild(cell);
}
// grid
// ui uniqely identify -> 
for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        // cell.innerText=`${String.fromCharCode(65 + j)}  ${i+1}`
        cell.setAttribute("class", "cell");
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);
        cell.setAttribute("contenteditable", "true");
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
// event listener add click;
let allCells = document.querySelectorAll(".grid .cell");
for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", function () {
        // address get current cell
        let rid = allCells[i].getAttribute("rid");
        let cid = allCells[i].getAttribute("cid");
        rid = Number(rid);
        cid = Number(cid);
        let address = `${String.fromCharCode(65 + cid)}${rid + 1}`;
        // alert(address);
        addressInput.value = address;
    })
}
boldBtn.addEventListener("click", function () {
    // Jispe cell click -> bold
    let uiCellElement = findUICellElement();
    uiCellElement.style.fontWeight = "bold";
})
underlineBtn.addEventListener("click", function () {
    // Jispe cell click -> bold
    let uiCellElement = findUICellElement();
    uiCellElement.style.textDecoration = "underline";
})
italicBtn.addEventListener("click", function () {
    // Jispe cell click -> bold
    let uiCellElement = findUICellElement();
    uiCellElement.style.fontStyle = "italic";
})
// text-decoration: underline|none;
// font-style: normal|italic;
function findUICellElement() {
    let address = addressInput.value;
    let ricidObj = getRIDCIDfromAddress(address);
    let rid = ricidObj.rid;
    let cid = ricidObj.cid;
    let uiCellElement = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`)
    return uiCellElement;
}
function getRIDCIDfromAddress(address) {
    let cid = Number(address.charCodeAt(0)) - 65;
    let rid = Number(address.slice(1)) - 1;
    return { "rid": rid, "cid": cid };
}
allCells[0].click();

