// address bar implementation
let cells = document.querySelectorAll(".grid .cell");
let addressBar = document.querySelector(".address_bar");
// 1. cell eventlistener -> on click
for (let i = 0; i < cells.length; i++) {
    // 2. when a cell is clicked -> element
    cells[i].addEventListener("click", function () {
        // console.log("Event happend");
        let cCell = cells[i];
        console.log(cCell);
        // 3. get rid,cid-> address me convert
        let rid = Number(cCell.getAttribute("rid"));
        let cid = Number(cCell.getAttribute("cid"));
        let address = String.fromCharCode(cid + 65) + (rid + 1);
        console.log(address);
        // 4.  put it into address bar
        addressBar.value = address;
    })
}


