
for (let i = 0; i < AllGridCells.length; i++) {
    AllGridCells[i].addEventListener("blur", function () {
        let content = AllGridCells[i].textContent;
        let address = addressInput.value;;
        let ridcidObj = getRidCidFromAddress(address);
        db[ridcidObj.rid][ridcidObj.cid].value = content;
    })
}