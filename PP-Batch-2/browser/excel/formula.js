for (let i = 0; i < Allcells.length; i++) {
    Allcells[i].addEventListener("blur", function () {
        // db -> value
        let { rid, cid } = getRIdIdfromAddress();
        console.log(rid + cid);
        let cellObj = sheetArr[rid][cid];
        if (cellObj.value == Allcells[i].innerText) {
            return;
        }
        cellObj.value = Allcells[i].innerText;
        // telling children to reevaluate and update
        updateChildren(cellObj);
        // isformulacyclic
        if (cellObj.formula) {
            removeFormula(addressElem.value, cellObj,cellObj.formula);
        }
    }
    )
}
function updateChildren(cellObj) {
    let children = cellObj.children;
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        let cCid = Number(child.charCodeAt(0)) - 65;
        let cRid = Number(child.slice(1)) - 1;
        let cFormula = sheetArr[cRid][cCid].formula;
        let value = evaluateFormula(cFormula);
        setCell(value, cRid, cCid, cFormula);
        updateChildren(sheetArr[cRid][cCid]);
    }
}
function removeFormula(myName, cellObj,cFormula) {
    let formulaTokens = cFormula.split(" ");
    for (let i = 0; i < formulaTokens.length; i++) {
        let ascii = formulaTokens[i].charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            // valid cell
            let parentCell = formulaTokens[i];
            // A->z
            // 1->100
            let pCid = Number(parentCell.charCodeAt(0)) - 65;
            let pRid = Number(parentCell.slice(1)) - 1;
            let parentObj = sheetArr[pRid][pCid]
            let idx = parentObj.children.indexOf(myName);
            parentObj.children.splice(idx, 1);

        }
    }
    cellObj.formula = "";
}
// 1.
formulabar.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && formulabar.value != "") {
        // 2. get formula
        let cFormula = formulabar.value;
        // 3. value get 
        let { rid, cid } = getRIdIdfromAddress();
        let cellObj = sheetArr[rid][cid];
        if(cellObj.formula==cFormula){
            return;
        }
        // you updating the formula 
        // 2 *A1
        // 2 * A1 + A2 
        // isformulaCylic
        if (cellObj.formula) {
            removeFormula(addressElem.value, cellObj,cellObj.formula)
        }
        let val = evaluateFormula(cFormula);
        // ui /db save cell
        setCell(val, rid, cid, cFormula);
        // parent
        setFormula(cFormula, addressElem.value);
    }
})
function evaluateFormula(cFormula) {
    let formulaTokens = cFormula.split(" ");
    for (let i = 0; i < formulaTokens.length; i++) {
        let ascii = formulaTokens[i].charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            // valid cell
            let parentCell = formulaTokens[i];
            // A->z
            // 1->100
            let pCid = Number(parentCell.charCodeAt(0)) - 65;
            let pRid = Number(parentCell.slice(1)) - 1;
            let pValue = sheetArr[pRid][pCid].value;
            formulaTokens[i] = pValue;
        }
    }
    let finalFormula = formulaTokens.join(" ");
    return eval(finalFormula);


}
function setFormula(cFormula, myName) {
    let formulaTokens = cFormula.split(" ");
    for (let i = 0; i < formulaTokens.length; i++) {
        let ascii = formulaTokens[i].charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            // valid cell
            let parentCell = formulaTokens[i];
            // A->z
            // 1->100
            let pCid = Number(parentCell.charCodeAt(0)) - 65;
            let pRid = Number(parentCell.slice(1)) - 1;
            sheetArr[pRid][pCid].children.push(myName);
        }
    }
}
function setCell(val, rid, cid, cFormula) {
    // ui
    let uiCell = document
        .querySelector(`.grid .cell[rid="${rid}"][ cid="${cid}"]`)
    uiCell.innerText = val;
    // db
    sheetArr[rid][cid].value = val;
    sheetArr[rid][cid].formula = cFormula;



}
