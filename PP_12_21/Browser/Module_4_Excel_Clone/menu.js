
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
    db[rid][cid].color = color;
})
// change
fontSizeInput.addEventListener("change", function () {
    let fontSize = fontSizeInput.value;
    let address = addressInput.value;;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontSize = fontSize + "px";
    let { rid, cid } = getRidCidFromAddress(address);
    let cellObject = db[rid][cid];
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
    // Ui se address get 
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontWeight = "bold";
    // icon change kar do 
    boldIcon.classList.add("selected");
})
underlineIcon.addEventListener("click", function () {
    // Ui se address get 
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.textDecoration = "underline";
    // icon change kar do 
    underlineIcon.classList.add("selected");
})
italicIcon.addEventListener("click", function () {
    // Ui se address get 
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontStyle = "italic";
    // icon change kar do 
    italicIcon.classList.add("selected");
    // db me entry
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
        // *********Bug prone
        e.target.classList.add("selected");
    }
})

// colors -> 