let input = process.argv[2];
let sortedArray =[3, 5, 7, 9, 12, 18, 24, 96, 105, 110, 120, 130];
let low = 0;
let high = sortedArray.length - 1;
let mid = Math.floor((low + high) / 2);
// element is not found
// what to do find the element
while (low <= high) {
    console.log(mid);
    if (sortedArray[mid] == input) {
        console.log(input + "is found at " + mid);
        return;
    } else if (sortedArray[mid] > input) {
        high = mid - 1;
    } else if (sortedArray[mid] < input) {
        low = mid + 1;
    }
    mid = Math.floor((low + high) / 2);
}
console.log("Element not found");