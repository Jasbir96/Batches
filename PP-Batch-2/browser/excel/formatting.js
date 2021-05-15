let bold = document.querySelector(".fa-bold");
let fontSize = document.querySelector(".font-size");
let fontFamily = document.querySelector(".font-family");
let alignmentbtns = document.querySelectorAll(".alignment-container>*");
bold.addEventListener("click", function () {
    // address get -> address
    // ui elemnt
    let uiCell = getcell();
    let { rid, cid } = getRIdIdfromAddress();
    // console.log(rid,cid);
    // sheet array
    let cellObj = sheetArr[rid][cid];
    if (cellObj.isBold == true) {
        uiCell.style.fontWeight = "normal";
        bold.classList.remove("menu-active");
        cellObj.isBold = false
    } else {
        uiCell.style.fontWeight = "bold";
        bold.classList.add("menu-active");
        cellObj.isBold = true;
    }
})
fontSize.addEventListener("change", function () {
    let cfontSize = fontSize.value;
    let uiCell = getcell();
    let { rid, cid } = getRIdIdfromAddress();
    let cellObj = sheetArr[rid][cid];
    // ui change
    uiCell.style.fontSize = cfontSize + "px";
    // cellobject
    cellObj.fontSize = cfontSize;
})
fontFamily.addEventListener("change", function () {
    let cfontFamily = fontFamily.value;
    let uiCell = getcell();
    let { rid, cid } = getRIdIdfromAddress();
    let cellObj = sheetArr[rid][cid];
    // ui change
    uiCell.style.fontFamily = cfontFamily;
    // cellobject
    cellObj.fontFamily = cfontFamily;
})

function getcell() {
    let address = addressElem.value;
    let { rid, cid } = getRIdIdfromAddress(address);
    console.log(rid, cid);
    return document.querySelector(`.grid .cell[rid="${rid}"][ cid="${cid}"]`)
}
function getRIdIdfromAddress() {

    let address = addressElem.value;
    // A->z
    // 1->100
    let cid = Number(address.charCodeAt(0)) - 65;
    let rid = Number(address.slice(1)) - 1;
    return { cid, rid };
}

for (let i = 0; i < alignmentbtns.length; i++) {
    alignmentbtns[i].onclick = function () {
        let uiCell = getcell();
        let { rid, cid } = getRIdIdfromAddress();
        // console.log(rid,cid);
        // sheet array
        let cellObj = sheetArr[rid][cid];
        let newAlignment = alignmentbtns[i].getAttribute("direct")
        uiCell.style.textAlign = newAlignment;
        for (let j = 0; j < alignmentbtns.length; j++) {
            alignmentbtns[j].classList.remove("menu-active");
        }
        alignmentbtns[i].classList.add("menu-active");
        cellObj.halign = newAlignment;
    }
}

let Allcells = document.querySelectorAll(".grid .cell");
let addressElem = document.querySelector(".address");
for (let i = 0; i < Allcells.length; i++) {
    Allcells[i].addEventListener("click", function () {
        let cid = Allcells[i].getAttribute("cid");
        let rid = Allcells[i].getAttribute("rid");
        cid = Number(cid);
        rid = Number(rid);
        // console.log(rid,cid);
        addressElem.value = `${String.fromCharCode(65 + cid)}${rid + 1}`;
        let cellObj = sheetArr[rid][cid];
        // tool bar
        if (cellObj.isBold == true) {
            bold.classList.add("menu-active");
        } else {
            bold.classList.remove("menu-active");
        }
        fontSize.value = cellObj.fontSize;
        fontSize.fontFamily = cellObj.fontFamily;
        for (let j = 0; j < alignmentbtns.length; j++) {
            alignmentbtns[j].classList.remove("menu-active");
            let cAlignment = alignmentbtns[j].getAttribute("direct");
            if (cAlignment == cellObj.halign) {
                alignmentbtns[j].classList.add("menu-active");
            }
        }
    }
    )
}
Allcells[0].click();