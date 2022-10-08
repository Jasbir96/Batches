let a = {
    p: 10,
    sayHi: function () {
        console.log("Hi p");
    }
};
//  b will be an empty that inherits the properties and methods of it's parent a
let b = Object.create(a);
b.prop=20;
// your own properties nad method can be printed
console.log(b,a);
console.log(b.p);

// can a children modify it's parent prop??
b.p=20;
console.log("`````````````````````````````");
console.log(b, a);
console.log(a.isPrototypeOf(b));

// javascript multiple inheritance -> ❌
// multilevel -> ✔

