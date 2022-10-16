// console.log("before");

let id = setInterval(function () {
    console.log("Interval");
}, 1000);
console.log("after");

setTimeout(function () {
    clearInterval(id)
}, 5000);


// implement  setInterval using setTimeout 



// **************************polyfill**********************
function mySetInterval(fn, interval) {
    //   shall your function run
    let clearObj = {
        shallIRun: true
    }
    function larger() {
        if (clearObj.shallIRun == false)
            return;
        fn();
        //  2nd call -> 2sec
        // 3rd call -> 2sec finish
        setTimeout(larger, interval);
    }
    // 1st call-> 2sec
    if (clearObj.shallIRun == true) {
        setTimeout(larger, interval);
    }
    return clearObj;
}
// clearInterval
function myClearInterval(clearMe) {
    clearMe.shallIRun = false;
}


// ********************calls********************
function fn() {
    console.log("I will be called after 2 secs");
}

let clearMe = mySetInterval(fn, 2000);
// // use -> 11sec 
setTimeout(function () {
    myClearInterval(clearMe);
    console.log("cleared")
}, 10000);
