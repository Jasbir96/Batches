

// print it to -> address bar
// top row cells creation
let topRow = document.querySelector(".top_row");
// left col cells creation
let leftCol = document.querySelector(".left_col");
// grid
let grid = document.querySelector(".grid");
let addressInput = document.querySelector(".address_input");
let formulaInput = document.querySelector(".formula_input");

// *************************Menu Elements *****************************
let fontSizeInput = document.querySelector(".font_size_input");
let fontFamilyInput = document.querySelector(".font_family_input");
let boldIcon = document.querySelector(".fa-bold");
let underlineIcon = document.querySelector(".fa-underline");
let italicIcon = document.querySelector(".fa-italic");
let alignmentContainer = document.querySelector(".alignment_container");
let textColorHInput = document.querySelector(".text_color");
let textColorInput = document.querySelector(".fa-tint");
let backgroundHInput = document.querySelector(".background_color");
let backgroundInput = document.querySelector(".fa-fill-drip");
let createSheetIcon = document.querySelector(".fa-plus");
let sheetList = document.querySelector(".sheets-list");
let firstSheet = document.querySelector(".sheet");
for (let i = 0; i < 26; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(div)
}

for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div)
}
// 2 d loop -> columns*rows

for (let i = 0; i < 100; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < 26; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        // div.textContent = String.fromCharCode(j+65)+(i+1)  
        // div.textContent = i + "," + j
        div.setAttribute("contentEditable", "true")
        //   every cell identification required 
        div.setAttribute("rId", i);
        div.setAttribute("cId", j);
        row.appendChild(div);
    }
    grid.appendChild(row)
}
// default value put for every cell
let sheetsDb = [];
function initDB() {
    let db = [];
    for (let i = 0; i < 100; i++) {
        let rowArr = [];
        for (let j = 0; j < 26; j++) {
            let cellObject = {
                color: "black",
                backgroundColor: "white",
                fontFamily: "'Courier New'",
                fontSize: 14,
                halign: "center",
                italic: false,
                underline: false,
                bold: false,
                value: "",
                formula: "",
                children: []
            }
            rowArr.push(cellObject)
        }
        db.push(rowArr);
    }
    sheetsDb.push(db);
}
initDB();
let db = sheetsDb[0];
// console.log(db);
// if i click on any of the cells
let AllGridCells = document.querySelectorAll(".grid .cell");
for (let i = 0; i < AllGridCells.length; i++) {
    AllGridCells[i].addEventListener("click", function (e) {
        // // previous cell address
        let prevAddress = addressInput.value;
        if (prevAddress != "") {
            let ridcidObj = getRidCidFromAddress(prevAddress);
            // alert(ridcidObj.rid +""+ ridcidObj.cid);
            // prev -> remove -> border
            let prevCell = document
                .querySelector
                (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
            prevCell.style.border = "0.1px solid gray";
            prevCell.style.borderRight = "none";
            prevCell.style.borderTop = "none";
        }
        // 
        // alert("cell was clicked");
        // -> then i will get the address of that particular cell
        let rid = AllGridCells[i].getAttribute("rId");
        let cid = AllGridCells[i].getAttribute("cId");
        //    get -> always in string 
        rid = Number(rid);
        cid = Number(cid);
        // alert(String.fromCharCode(cid + 65) + " " + (rid + 1));
        // alert (cid +" "+rid+1 );
        addressInput.value = String.fromCharCode(cid + 65) + (rid + 1);
        // cell styling bhi change
        let cCell = AllGridCells[i];
        cCell.style.border = "2px solid #1B9CFC";
        // *****************2 way binding menu styling*****************
        let cellObject = db[rid][cid];
        // font size 
        let fontSize = cellObject.fontSize;
        fontSizeInput.value = fontSize;
        boldIcon.classList.remove("selected");
        italicIcon.classList.remove("selected");
        underlineIcon.classList.remove("selected");
        let optionElements = alignmentContainer.children;
        for (let i = 0; i < optionElements.length; i++) {
            optionElements[i].classList.remove("selected");
        }
        // boldness
        if (cellObject.bold) {
            boldIcon.classList.add("selected");
        }
        if (cellObject.italic) {
            italicIcon.classList.add("selected");
        }
        if (cellObject.underline) {
            underlineIcon.classList.add("selected");
        }
        if (cellObject.halign) {
            for (let i = 0; i < optionElements.length; i++) {
                let elementClasses = optionElements[i].classList;
                let hAlignment = elementClasses[elementClasses.length - 1];
                if (hAlignment == cellObject.halign) {
                    elementClasses.add("selected");
                }
            }
        }


        formulaInput.value = cellObject.formula

    })

}
// get first elem
let firstCell = document.querySelector(".grid .cell[rId='0'][cId='0']");
firstCell.click();
firstCell.focus();
function getRidCidFromAddress(address) {
    // A-Z, 1-100
    // B
    let AsciiValue = address.charCodeAt(0);
    let cid = AsciiValue - 65;
    let rid = Number(address.substring(1)) - 1;
    return {
        rid: rid, cid: cid
    }

}
firstSheet.addEventListener("click", function (e) {
    //    list of sheet me se sabme se aap remove active sheet
    for (let i = 0; i < sheetList.children.length; i++) {
        sheetList.children[i].classList.remove("active-sheet")
    }
    // given sheet add kar lo 
    firstSheet.classList.add("active-sheet");
    db = sheetsDb[0];
    setinitUI();

})
createSheetIcon.addEventListener("click", sheetHandler);
function sheetHandler() {
    let noofChildren = sheetList.children.length;
    // dom se create 
    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    newSheet.setAttribute("sheetIdx", noofChildren);
    newSheet.textContent = `Sheet ${noofChildren + 1}`
    sheetList.appendChild(newSheet);
    initDB();
    // active me switch
    newSheet.addEventListener("click", function () {
        for (let i = 0; i < sheetList.children.length; i++) {
            sheetList.children[i].classList.remove("active-sheet")
        }
        newSheet.classList.add("active-sheet");
        let idx = newSheet.getAttribute("sheetIdx");
        db = sheetsDb[idx];
        setinitUI();

    })
    newSheet.click();
}

function sheetOpenHandler() {
    let noofChildren = sheetList.children.length;
    // dom se create 
    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    newSheet.setAttribute("sheetIdx", noofChildren);
    newSheet.textContent = `Sheet ${noofChildren + 1}`
    sheetList.appendChild(newSheet);
    // initDB();
    // active me switch
    newSheet.addEventListener("click", function () {
        for (let i = 0; i < sheetList.children.length; i++) {
            sheetList.children[i].classList.remove("active-sheet")
        }
        newSheet.classList.add("active-sheet");
        let idx = newSheet.getAttribute("sheetIdx");
        db = sheetsDb[idx];
        setinitUI();
    })
}
// create sheet logic
