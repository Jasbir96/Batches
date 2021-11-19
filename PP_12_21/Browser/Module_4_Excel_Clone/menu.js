
textColorInput.addEventListener("click", function (e) {
    //dom help hidden click trigger 
    textColorHInput.click();
    // console.log("clicked");
})
textColorHInput.addEventListener("change", function (e) {
    let color = textColorHInput.value;
    // console.log(color);
    let address = addressInput.value;;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    tobeChangedCell.style.color = color;
    // db me bhi update karta hu
    let { rid, cid } = getRidCidFromAddress(address);
    db[rid][cid].color = color;
})
backgroundInput.addEventListener("click", function (e) {
    //   dom help hidden click trigger 
    backgroundHInput.click();
    console.log("clicked");
})
backgroundHInput.addEventListener("change", function (e) {
    let color = backgroundHInput.value;
    // console.log(color);
    let address = addressInput.value;;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    tobeChangedCell.style.backgroundColor = color;
    let { rid, cid } = getRidCidFromAddress(address);
    db[rid][cid].backgroundColor = color;
})
// change
fontSizeInput.addEventListener("change", function () {
    let fontSize = fontSizeInput.value;
    let address = addressInput.value;;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    //    db jaake -> cell property update 
    let { rid, cid } = getRidCidFromAddress(address);
    let cellObject = db[rid][cid];
    tobeChangedCell.style.fontSize = fontSize + "px";
    cellObject.fontSize = fontSize;
})
// select -> fontFamily
fontFamilyInput.addEventListener("change", function () {
    let fontFamily = fontFamilyInput.value;
    let address = addressInput.value;;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontFamily = fontFamily;
})
boldIcon.addEventListener("click", function () {
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    // Ui se address get 
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // db jaake -> value set
    let cellObject = db[ridcidObj.rid][ridcidObj.cid];
    // change fontSize property
    if (cellObject.bold) {
        tobeChangedCell.style.fontWeight = "normal";
        boldIcon.classList.remove("selected");
        cellObject.bold = false;
    } else {
        tobeChangedCell.style.fontWeight = "bold";
        boldIcon.classList.add("selected");
        cellObject.bold = true;
    }
    // icon change kar do 
})
italicIcon.addEventListener("click", function () {
    // Ui se address get 
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    // icon change kar do 
    let cellObject = db[ridcidObj.rid][ridcidObj.cid];
    if (cellObject.italic) {
        tobeChangedCell.style.fontStyle = "normal";
        italicIcon.classList.remove("selected");
        cellObject.italic = false;
    } else {
        tobeChangedCell.style.fontStyle = "italic";
        italicIcon.classList.add("selected");
        cellObject.italic = true;
    }
    // db me entry
})
underlineIcon.addEventListener("click", function () {
    // Ui se address get 
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    let cellObject = db[ridcidObj.rid][ridcidObj.cid];
    if (cellObject.underline) {
        tobeChangedCell.style.textDecoration = "none";
        underlineIcon.classList.remove("selected");
        cellObject.underline = false;
    } else {
        tobeChangedCell.style.textDecoration = "underline";
        underlineIcon.classList.add("selected");
        cellObject.underline = true;
    }


})
alignmentContainer.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target !== alignmentContainer) {
        let classesArr = e.target.classList;
        let hAlignment = classesArr[classesArr.length - 1];
        let address = addressInput.value;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector
            (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        // change fontSize property
        tobeChangedCell.style.textAlign = hAlignment;
        //set selected 
        let optionElements = alignmentContainer.children;
        for (let i = 0; i < optionElements.length; i++) {
            optionElements[i].classList.remove("selected");
        }
        // *********Bug prone***********
        e.target.classList.add("selected");
        // db update 
        let cellObject = db[ridcidObj.rid][ridcidObj.cid];
        cellObject.halign=hAlignment;
    }
})

// colors -> 