let inputArr = process.argv.slice(2);
let firstNumber = inputArr[0];
for (let i = 1; i <= firstNumber; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FIzzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");

    } else {
        console.log(i);
    }
}
