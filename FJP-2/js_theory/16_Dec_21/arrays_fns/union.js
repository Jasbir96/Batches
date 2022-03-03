// you are given two arrays
// arrays have unique element arrays 
// union create of these two arrays 
// without using extra space  
let array1 = [1, 4, 3, 6, 5];
let array2 = [1, 3, 100, 200];

for (let i = 0; i < array2.length; i++) {
    let cElement = array2[i];
    // includes -> true/false 
    // indexof-> idx/-1
    let isPresent = array1.includes(cElement);
    if (isPresent == false) {
        array1.push(cElement);
    }
}
console.log(array1);




