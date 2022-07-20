// create grid
function initUI() {
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
initUI();

// ***********************sheet wala logic**************
let sheets = [];
//  2array create kara and push kara dia apne sheets ke array 
function initDbToSheet() {
    let newDb = [];
    for (let i = 0; i < 100; i++) {
        let rowArr = [];
        for (let j = 0; j < 26; j++) {
            let cellObj = {
                fontFamily: "Courier New",
                fontSize: "16",
                isBold: false,
                isItalic: false,
                isUnderline: false,
                cAlignment: "justify",
                formula: "",
                value: "",
                children: []
            }
            rowArr.push(cellObj);
        }
        newDb.push(rowArr);
    }
    sheets.push(newDb);
}
initDbToSheet();
let db = sheets[0];
let firstCell = document.querySelector
(`.grid .cell[rid="${0}"][cid="${0}"]`);
firstCell.click();
// first me sheet change pe color chnage 
let firstSheet = document.querySelector(".sheet_sub .sheet");
firstSheet.addEventListener("click", changeSheet);
// db variable available 
// new sheets to be created 
let addBtn = document.querySelector(".add_sheet");
let sheetSubContainer = document.querySelector(".sheet_sub");

addBtn.addEventListener("click", function () {
    //    ***********build sheet ui*****************
    // get all the sheet
    let allSheets = document.
        querySelectorAll(".sheet_sub .sheet");
    // last sheet
    let lastSheet = allSheets[allSheets.length - 1];
    let myId = lastSheet.getAttribute("myId")
    let newMyId = Number(myId) + 1;
    let sheetHtml = document.createElement("div");
    sheetHtml.setAttribute("class", "sheet");
    sheetHtml.setAttribute("myId", `${newMyId}`);
    sheetHtml.innerText = `Sheet ${newMyId + 1}`;
    sheetSubContainer.appendChild(sheetHtml);
    // ************building 2d array db for that sheet 
    initDbToSheet();
    // current sheet put karne wala event listener 
    sheetHtml.addEventListener("click", changeSheet);
})
function changeSheet(e) {
    let sheetHtml = e.currentTarget;
    let allSheets = document.querySelectorAll(".sheet_sub .sheet");
    for (let i = 0; i < allSheets.length; i++) {
        allSheets[i].classList.remove("current_sheet");
    }
    // set as a current sheet on the ui 
    sheetHtml.classList.add("current_sheet");
    let cSheetidx = sheetHtml.getAttribute("myId");
    db = sheets[cSheetidx];
    setUI(db);
}
function setUI(db) {
    for (let rid = 0; rid < 100; rid++) {
        for (let cid = 0; cid < 26; cid++) {
            let cellObj = db[rid][cid];
            let uiCell = document.querySelector
                (`.grid .cell[rid="${rid}"][cid="${cid}"]`);
            uiCell.style.fontFamily = cellObj.fontFamily;
            uiCell.style.fontSize = cellObj.fontSize + "px";
            // terneray operator 
            uiCell.style.fontStyle = cellObj.isItalic == true ? "italic" : "normal";
            uiCell.style.fontWeight = cellObj.isBold == true ? "bold" : "normal";
            uiCell.style.textDecoration = cellObj.isUnderline == true ? "underline" : "none";
            uiCell.style.textAlign = cellObj.cAlignment;
            uiCell.textContent = cellObj.value;
        }
    }
    let firstCell = document.querySelector
        (`.grid .cell[rid="${0}"][cid="${0}"]`);
        firstCell.click();
}
