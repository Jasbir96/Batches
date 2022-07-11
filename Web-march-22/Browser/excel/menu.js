// font-size
let fontSizeSelector = document.querySelector(".select_f_size");
let fontFamilySelector = document.querySelector(".select_f_family");
let boldButton = document.querySelector(".fa-bold");
let italicButton = document.querySelector(".fa-italic");
let underlineButton = document.querySelector(".fa-underline");
fontSizeSelector.addEventListener("change", function () {
    // what to change
    let fontSize = fontSizeSelector.value;
    // where to change
    let cellToBeChanged = getCell();
    // do the change
    cellToBeChanged.style.fontSize = fontSize + "px";
})
fontFamilySelector.addEventListener("change", function () {
    let fontFamily = fontFamilySelector.value;
    //1.  set -> address get  from address bar
    let cellToBeChanged = getCell();
    //3.  style set
    cellToBeChanged.style.fontFamily = fontFamily;
})

// make a text bold in  dom -> (fontWeight)bold /normal

boldButton.addEventListener("click", function () {
    // get the change 
    let isSelected = boldButton.classList[2];
    // where to change
    let cellToBeChanged = getCell();
    // do the change 
    if (isSelected == "selected") {
        boldButton.classList.remove("selected");
        cellToBeChanged.style.fontWeight = "normal";
    } else {
        boldButton.classList.add("selected");
        cellToBeChanged.style.fontWeight = "bold";
    }
})
// select bold -> toggle wala logic
// 2-> similar
// make a text italic in  dom -> (fontStyle) italic/normal
// 2-> similar
// make a text underline in  dom -> (textDecoration) underline/none

// ********************helper function*****************

function getCell() {
    //1.  set -> address get  from address bar
    let { rid, cid } = getRidCidFromAddressBar();
    //2.  address -> ui cell get (html)
    let cell = document.querySelector
    (`.grid .cell[rid="${rid}"][cid="${cid}"]`)
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
