// initially grid build
let columns = 26;
let rows = 100;
// 65
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let grid = document.querySelector(".grid");
for (let i = 0; i < columns; i++) {
    let div = document.createElement("div");
    div.innerText = String.fromCharCode(65 + i);
    div.setAttribute("class", "cell");
    topRow.appendChild(div);
}
for (let i = 1; i <= rows; i++) {
    let div = document.createElement("div");
    div.innerText = i
    div.setAttribute("class", "block");
    leftCol.appendChild(div);
}
// rows-> 100
// col - > 26
for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < columns; j++) {
        let col = document.createElement("div");
       
        col.setAttribute("class", "cell");
        col.setAttribute("rid", i);
        col.setAttribute("cid", j);
        col.setAttribute("contenteditable","true");

        row.appendChild(col);
    }
    grid.appendChild(row);
}
let Allcells = document.querySelectorAll(".grid .cell");
let addressElem = document.querySelector(".address");
for (let i = 0; i < Allcells.length; i++) {
    Allcells[i].addEventListener("click", function () {
        let cid = Allcells[i].getAttribute("cid");
        let rid = Allcells[i].getAttribute("rid");
        cid=Number(cid);
        rid=Number(rid);
        // console.log(rid,cid);
        addressElem.value=`${String.fromCharCode(65 + cid)}${rid + 1}`; 
    }
    )
}
Allcells[0].click();