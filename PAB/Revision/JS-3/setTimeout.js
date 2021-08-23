//async function setTimeout,setInterval
// function sayHi() {
//     console.log("Hello fn");
//     return 10;
// }
// setTimeout(sayHi, 1000);
// with arguments
function sayHi(phrase, who) {
    console.log("Hello");
}
// setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
//   clearTimeout 
let timerId = setTimeout(sayHi, 1000);
let newDate = Date.now() + 2000;
while (Date.now() < newDate){

}
clearTimeout(timerId);
// clearInterval
// let timerId = setInterval(() => alert('tick'), 2000);
// after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); 
// alert('stop'); }, 5000);