let bold = document.querySelector(".fa-bold");
bold.addEventListener("click", function () {
    // address get -> address
    let address = addressElem.value;
    let { rid, cid } = getRIdIdfromAddress(address);
    console.log(rid,cid);
    let cell = document.querySelector(`.grid .cell[rid="${rid}"][ cid="${cid}"]`)

    cell.style.fontWeight = "bold";
    bold.classList.add("menu-active");
    // cell -> matching cid ,rid
    // cell style
})
function getRIdIdfromAddress(address) {
    // A->z
    // 1->100
    console.log(address)
    let cid = Number(address.charCodeAt(0)) - 65;
    let rid = Number(address.slice(1)) - 1;
    return { cid, rid };
}
