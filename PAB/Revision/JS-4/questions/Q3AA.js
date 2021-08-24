function resolveAfterNSeconds(n, x) {
    return new Promise(resolve => {
        console.log("Before");
        setTimeout(() => {
            resolve(x);
        }, n);
        console.log("After");
    });
}
//   t-> 0
(function () {
    let a = resolveAfterNSeconds(1000, 1)
    console.log("a", a);// on which second a will be printed PP-> 0th second
    a.then(async function (x) {
        console.log("x", x) // on which second x will be printed -> 1 1st second
        let y = await resolveAfterNSeconds(2000, 2)
        console.log("y", y) // on which second  y will be printed -> 2 3rd second 
        let z = await resolveAfterNSeconds(1000, 3)
        console.log("z", z) // on which second z will be printed -> 3 4th second
        let p = resolveAfterNSeconds(2000, 4)
        console.log("p", p) // on which second  p will be printed -> Pending promise 4th second
        let q = resolveAfterNSeconds(1000, 5); //-> Pending promise 4th second
        console.log(x + y + z + await p + await q); //output on which second  15  6thsecond
    })
})()

