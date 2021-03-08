// function fn() {
//     console.group("Hello :)");
//     return; 
//     "apple"
// }
// let rName = fn();
// console.log("rName is",rName);
let arr=[2,4,6,8];
function squarer(x){
    console.log(arr);
    return x*x;
}
 let newArr=arr.map(squarer);
 console.log("old arr",arr);
 console.log("new arr",newArr);
 