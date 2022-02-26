// find the element in an array -> found -> idx/-1; 
let arr = [5, 7, 19, 12, 13, 14];
let input = process.argv[2];
for (let i = 0; i < arr.length; i++) {
    let cElem = arr[i];
    if (cElem == input) {
        console.log(i);
        return; //code is terminated 
    } else {
        console.log(cElem + "is not eqauls to "+input);  }
}
console.log(-1);




