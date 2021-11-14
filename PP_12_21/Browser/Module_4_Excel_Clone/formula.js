
for (let i = 0; i < AllGridCells.length; i++) {
    AllGridCells[i].addEventListener("blur", function () {
        let content = AllGridCells[i].textContent;
        let address = addressInput.value;
        let { rid, cid } = getRidCidFromAddress(address);
        // db[ridcidObj.rid][ridcidObj.cid].value = content;
        // set self ui as well as children new values and ui
        setUI(content, rid, cid);
    })
}
// formula bar
formulaInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && formulaInput.value != "") {
        // fomrula get
        let cFormula = formulaInput.value;
        // address -> jispe formula jo value get wo set ho jaayegi 
        let addressOfTheCell = addressInput.value;
        let { rid, cid } = getRidCidFromAddress(addressOfTheCell);
        // console.log(cFormula);
        let value = evaluateFormula(cFormula);
        console.log(value);
        setUI(value, rid, cid);
        db[rid][cid].formula = cFormula;
        setParent(addressOfTheCell, cFormula);

    }
})
function evaluateFormula(formula) {
    console.log(formula);
    // ( A1 + A2 ) -> ( 10 + 20 )
    let formulaEntities = formula.split(" ");
    // [(,A1,+,A2,)]
    console.log(formulaEntities);
    for (let i = 0; i < formulaEntities.length; i++) {
        let ascii = formulaEntities[i].charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            // address -> rid cId
            let cellrcObj = getRidCidFromAddress(formulaEntities[i]);
            // db -> value
            let value = db[cellrcObj.rid][cellrcObj.cid].value;
            // replace in formula
            formula = formula.replace(formulaEntities[i], value);
        }
    }
    console.log(formula);
    // eval -> evaluate-> inbuilt 
    let result = eval(formula); 
    return result;
}
function setUI(value, rid, cid) {
    let tobeChangedCell = document.querySelector(`.grid .cell[rId='${rid}'][cId='${cid}']`);
    tobeChangedCell.textContent = value;
    db[rid][cid].value = value;
    // change your children -> re-evaulate -> set ui
    let childrenArr = db[rid][cid].children;
    // B1
    for (let i = 0; i < childrenArr.length; i++) {
        let chriciobj = getRidCidFromAddress(childrenArr[i]);
        let chCellObj = db[chriciobj.rid][chriciobj.cid];
        let value=  evaluateFormula(chCellObj.formula);
        setUI(value,chriciobj.rid,chriciobj.cid)
    }

}
//  to set a cell as children of a cell jispe depenedent 
function setParent(address, formula) {
    console.log(formula);
    // ( A1 + A2 ) -> ( 10 + 20 )
    let formulaEntities = formula.split(" ");
    // [(,A1,+,A2,)]
    console.log(formulaEntities);
    for (let i = 0; i < formulaEntities.length; i++) {
        let ascii = formulaEntities[i].charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            // address -> rid cId
            let parentrcObj = getRidCidFromAddress(formulaEntities[i]);
            // db -> value
            let children = db[parentrcObj.rid][parentrcObj.cid].children;
            children.push(address);
            // replace in formula

        }
    }
    console.log(formula);
}