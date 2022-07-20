// font-size
let fontSizeSelector = document.querySelector(".select_f_size");
let fontFamilySelector = document.querySelector(".select_f_family");
let boldButton = document.querySelector(".fa-bold");
let italicButton = document.querySelector(".fa-italic");
let underlineButton = document.querySelector(".fa-underline");
let addressBar = document.querySelector(".address_bar");
let alignmentBtns = document
    .querySelectorAll(".alignment_container i");


fontSizeSelector.addEventListener("change", function () {
    //   **************UI*************************
    // what to change
    let fontSize = fontSizeSelector.value;
    // where to change
    let cellToBeChanged = getCell();
    // do the change
    cellToBeChanged.style.fontSize = fontSize + "px";
    // change in db also
    // *********************db******************* 
    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];
    dbCellObj.fontSize = fontSize;
})
fontFamilySelector.addEventListener("change", function () {
    let fontFamily = fontFamilySelector.value;
    //1.  set -> address get  from address bar
    let cellToBeChanged = getCell();
    //3.  style set
    cellToBeChanged.style.fontFamily = fontFamily;

    // db update 
    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];
    dbCellObj.fontFamily = fontFamily;
})

//  bold -> toggle wala logic
// make a text bold in  dom -> (fontWeight)bold /normal
boldButton.addEventListener("click", function () {
    // get the change 
    let isSelected = boldButton.classList[2];
    // where to change
    // ui wala cell
    let cellToBeChanged = getCell();
    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];
    // do the change
    if (isSelected == "selected") {
        boldButton.classList.remove("selected");
        cellToBeChanged.style.fontWeight = "normal";
        // db cell isbold property update
        dbCellObj.isBold = false;
    } else {
        boldButton.classList.add("selected");
        cellToBeChanged.style.fontWeight = "bold";
        // db cell isbold property update
        dbCellObj.isBold = true;
    }
})

// make a text italic in  dom -> (fontStyle) italic/normal
italicButton.addEventListener("click", function () {
    // get the change 
    let isSelected = italicButton.classList[2];
    // where to change
    let cellToBeChanged = getCell();
    // do the change 
    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];
    if (isSelected == "selected") {
        italicButton.classList.remove("selected");
        cellToBeChanged.style.fontStyle = "normal";
        dbCellObj.isItalic = false;
    } else {
        italicButton.classList.add("selected");
        cellToBeChanged.style.fontStyle = "italic";
        dbCellObj.isItalic = true;

    }
})
// make a text underline in  dom -> (textDecoration) underline/none
underlineButton.addEventListener("click", function () {
    // get the change 
    let isSelected = underlineButton.classList[2];
    // where to change
    let cellToBeChanged = getCell();
    // do the change 
    let { rid, cid } = getRidCidFromAddressBar();
    let dbCellObj = db[rid][cid];
    if (isSelected == "selected") {
        underlineButton.classList.remove("selected");
        cellToBeChanged.style.textDecoration = "none";
        dbCellObj.isUnderline = false;
    } else {
        underlineButton.classList.add("selected");
        cellToBeChanged.style.textDecoration = "underline";
        dbCellObj.isUnderline = true;
    }
})

// alignment ka code 
for (let i = 0; i < alignmentBtns.length; i++) {
    alignmentBtns[i].addEventListener("click", function () {
        // step1
        let curElem = alignmentBtns[i];
        // remove selected class from every elem 
        for (let j = 0; j < alignmentBtns.length; j++) {
            alignmentBtns[j].classList.remove("selected");
        }
        curElem.classList.add("selected");
        let alignment = curElem.classList[2];

        // // ui pe changes 
        let cellToBeChanged = getCell();
        console.log("cellToBeChanged", cellToBeChanged);
        cellToBeChanged.style.textAlign = alignment;
        // db update 
        let { rid, cid } = getRidCidFromAddressBar();
        let dbCellObj = db[rid][cid];
        dbCellObj.cAlignment = alignment;
    })

}


// ********************helper function*****************
function getCell() {
    //1.  set -> address get  from address bar
    let { rid, cid } = getRidCidFromAddressBar();
    //2.  address -> ui cell get (html)
    let cell = document.querySelector
        (`.grid .cell[rid="${rid}"][cid="${cid}"]`);
    return cell;
}
function getRidCidFromAddressBar() {
    let address = addressBar.value;
    // console.log(address);
    let ciChar = address.charCodeAt(0);
    let rowid = address.substr(1);
    let cid = Number(ciChar) - 65;
    let rid = Number(rowid) - 1;
    return { "rid": rid, "cid": cid }
}

