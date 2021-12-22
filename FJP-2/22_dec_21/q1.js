// 3,3,3
// function outer() {
//     var arr = [];
//     for (var i = 0; i < 3; i++) {
//         arr.push(function () {
//             console.log(i);
//         })
//     }
//     return arr;
// }
// solution 1 -> execution context
function outer() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        function outer1() {
            // j ke liye har baar aap alag se variable banate ho 
            var j = i;
            return function () {
                console.log(j);
            }
        }
        arr.push(outer1());
    }
    return arr;
}
console.log("Before calling outer");
var arr = outer();
arr[0]();
arr[1]();
arr[2]();
console.log("After calling outer");


// 3 more cases are there -> let -> 0,1,2 ,let will not work ,iifee

