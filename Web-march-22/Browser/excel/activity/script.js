// address bar implementation
let cells = document.querySelectorAll(".grid .cell");
// 1. cell eventlistener -> on click
for (let i = 0; i < cells.length; i++) {
    // 2. when a cell is clicked -> element
    cells[i].addEventListener("click", function () {
        // console.log("Event happend");
        let cCell = cells[i];
        // console.log(cCell);
        // 3. get rid,cid-> address me convert
        let rid = Number(cCell.getAttribute("rid"));
        let cid = Number(cCell.getAttribute("cid"));
        let address = String.fromCharCode(cid + 65) + (rid + 1);
        // console.log(address);
        // 4.  put it into address bar
        addressBar.value = address;

        // step 3 menu bar -> set
        setMenuBar(rid, cid);

    })
}

function setMenuBar(rid, cid) {
    let cellObj = db[rid][cid];
    // boldButton
    if (cellObj.isBold) {
        boldButton.classList.add("selected");
    } else {
        boldButton.classList.remove("selected");
    }
    // italicButton
    if (cellObj.isItalic) {
        italicButton.classList.add("selected");
    } else {
        italicButton.classList.remove("selected");
    }
    // underlineButton
    if (cellObj.isUnderline) {
        underlineButton.classList.add("selected");
    } else {
        underlineButton.classList.remove("selected");
    }
    // font size
    fontSizeSelector.value = cellObj.fontSize;
    // font family
    fontFamilySelector.value = cellObj.fontFamily;
    // ui changes 
    // remove selected class from every elem 
    for (let j = 0; j < alignmentBtns.length; j++) {
        alignmentBtns[j].classList.remove("selected");
    }
    for (let j = 0; j < alignmentBtns.length; j++) {
        let iscurrent = alignmentBtns[j].classList[2];
        if (iscurrent == cellObj.cAlignment) {
            alignmentBtns[j].classList.add("selected");
        }
    }
    // set formula in sync
    let formula = cellObj.formula;
    formulaBar.value = formula
}
