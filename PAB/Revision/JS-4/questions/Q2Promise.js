console.log(1);
setTimeout(function () {
    console.log(3);
});
console.log(4);
setTimeout(function () {
    console.log(2);
});
// t-> resolve

// microtask queue
Promise.resolve().then(function () {
    console.log(5);
});
console.log(6);