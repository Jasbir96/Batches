// font-size
let fontSizeSelector = document.querySelector(".select_f_size");
fontSizeSelector.addEventListener("change", function () {
    let fontSize = fontSizeSelector.value;
    //1.  set -> address get  from address bar
    let { rid, cid } = getRidCidFromAddressBar();
    //2.  address -> ui cell get (html)
    let cell = document.querySelector(`.grid .cell[rid="${rid}"][cid="${cid}"]`)
    //3.  style set
    cell.style.fontSize = fontSize + "px";
})
function getRidCidFromAddressBar() {
    let address = addressBar.value;
    console.log(address);
    return addresstoRidCid(address);
}
function addresstoRidCid(address) {
    // -> D2-> rid-> 1 ,cid-> 3
    let ciChar = address.charCodeAt(0);
    let rowid = address.substr(1);
    let cid = Number(ciChar) - 65;
    let rid = Number(rowid) - 1;
    return { "rid": rid, "cid": cid }
    // console.log(ciChar + "  " + rowid);

}