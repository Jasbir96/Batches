let arr = [5, 7, 19, 12, 13, 14];
// can't use extra space -> 
// remove prime number  from the given array 
let length=arr.length;

for (let i = arr.length-1; i >=0 ; i--) {
    let result = isPrime(arr[i]);
    if (result == true) {
        arr.splice(i,1);
    }
}
console.log(arr);
function isPrime(number) {
    let isPrimeFlag = true;
    for (let div = 2; div <= number - 1; div++) {
        if (number % div == 0) {
            isPrimeFlag = false;
            break;
        }
    }
    return isPrimeFlag;

}