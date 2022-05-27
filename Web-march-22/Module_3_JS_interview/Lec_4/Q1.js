function printArrFN() {
    let arr = [];
    
    for (var i = 0; i < 3; i++) {
        
        function printI() {
            console.log("i", i);
        }
        // adding reference to the array
        arr.push(printI);
    }
    return arr;
}

let arrFn = printArrFN();
arrFn[0]();
arrFn[1]();
arrFn[2]();

