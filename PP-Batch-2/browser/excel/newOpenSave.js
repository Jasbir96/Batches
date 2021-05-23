let download = document.querySelector(".download");
let open = document.querySelector(".open");
let input = document.querySelector(".file-taker");
download.addEventListener("click", function () {
    // sheetListArr
    let a = document.createElement("a");
    // json -> xlsx -> excel
    let url = "data:text/json;charset=utf-8," + 
    encodeURIComponent(JSON.stringify(sheetListArr));
    a.setAttribute("href", url);
    a.setAttribute("download", "file.json");
    a.click();
    // a.remove();
})
open.addEventListener("click", function () {
    // input type file
    input.click();
    // select file
    input.addEventListener("change", function () {
        // file obj arr
        let filesArr = input.files;
        let fileObj = filesArr[0];
        console.log(fileObj);
        // frontend api -> file reader 
        let fr = new FileReader();
        fr.readAsText(fileObj);
        fr.addEventListener("load", function () {
            let stringData = fr.result
            sheetListArr = JSON.parse(stringData);
            sheetArr = sheetListArr[0];
            setUI(sheetArr);
            for (let i = 0; i < sheetListArr.length-1; i++) {
                iconContainer.click();
            }
        })
    })
})

