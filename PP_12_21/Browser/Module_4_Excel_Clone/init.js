

// print it to -> address bar
// top row cells creation
let topRow = document.querySelector(".top_row");
// left col cells creation
let leftCol = document.querySelector(".left_col");
// grid
let grid = document.querySelector(".grid");
let addressInput = document.querySelector(".address_input");

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
            prevCell.style.border ="0.1px solid gray";
            prevCell.style.borderRight="none";
            prevCell.style.borderTop="none";
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