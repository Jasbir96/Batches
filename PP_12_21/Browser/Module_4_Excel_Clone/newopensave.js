let downloadBtn = document.querySelector(".fa-save");
let openBtn = document.querySelector(".fa-envelope-open");
let openInput = document.querySelector(".open_input");
let newInput = document.querySelector(".fa-file");
downloadBtn.addEventListener("click", function (e) {
    // anchor create
    let a = document.createElement("a");
    // file put -> db array 
    var StringCode = encodeURIComponent(JSON.stringify(sheetsDb));
    var dataStr = "data:text/json;charset=utf-8," +
        StringCode;
    a.href = dataStr;
    a.download = "file.json";
    // // anchor click
    a.click();
    // styling -> pass
    // var ws = XLSX.utils.json_to_sheet(db);
    // var wb = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, "sheet1");
    // XLSX.writeFile(wb, "file.xlsx");
})
openBtn.addEventListener("click", function (e) {
    openInput.click();
})
openInput.addEventListener("change", function (e) {
    // files array
    let filesArr = openInput.files;
    console.log(filesArr);
    // first file select
    // first file get  
    let file = filesArr[0];
    // fileReader -> browser inbuilt
    const reader = new FileReader();
    // read as text 
    reader.readAsText(file);
    reader.addEventListener('load', (event) => {
        // img.src = event.target.result;
        let JSONdata = JSON.parse(event.target.result);
        sheetsDb = JSONdata
        db = sheetsDb[0];
        sheetList.children = [];
        setinitUI();
        setSheets();
    });
})
function setSheets() {
    console.log(sheetsDb.length)
    sheetList.innerHTML="";
    for (let i = 0; i < sheetsDb.length; i++) {
        sheetOpenHandler();
    }
}
newInput.addEventListener("click", function () {
    // set db to empty
    sheetsDb = [];

    // set initial entries
    initDB(); // -> initial Db
    // ui -> map accoriding to new db
    db = sheetsDb[0];
    setinitUI();
    setSheets();
    // ui se remove sheets and sheetsDB;

})
function setinitUI() {
    for (let i = 0; i < 100; i++) {

        for (let j = 0; j < 26; j++) {
            //    set all the properties on ui with matchiing rid,cid
            let cellObject = db[i][j];
            let tobeChangedCell = document.querySelector(`.grid .cell[rId='${i}'][cId='${j}']`);
            console.log(cellObject.value);
            console.log(tobeChangedCell)
            tobeChangedCell.innerText = cellObject.value;
            tobeChangedCell.style.color = cellObject.color;
            tobeChangedCell.style.backgroundColor = cellObject.backgroundColor;
            tobeChangedCell.style.fontFamily = cellObject.fontFamily;
            tobeChangedCell.style.textAlign = cellObject.halign;
            tobeChangedCell.style.textDecoration = cellObject.underline == false ? "none" : "underline";
            tobeChangedCell.style.fontStyle = cellObject.italic == false ? "normal" : "italic";
            tobeChangedCell.style.fontSize = cellObject.fontSize;
        }
    }
}
