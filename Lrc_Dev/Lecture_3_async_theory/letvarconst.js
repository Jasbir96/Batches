// redeclare 
// reassign
// TDZ
// scope
// let -> block scope
// var -> function scope
// var let const
// reassign ✅
// var a;
// console.log(a);
// a = 10;
// console.log(a);
// // reassign ✅
// let a; 
// console.log(a);
// a = 10;
// console.log(a);

// redeclare; ✅
// var a;
// console.log(a);
// var a=10;
// console.log(a);
// redeclare ❌
// let a;
// SyntaxError: Identifier 'a' has already been declared
// let a;

// access before declaration ✅
// console.log(a);
// var a;
// access before declaration ❌
// ReferenceError: Cannot access 'a' before initialization
// console.log(a);  // temporal dead zone
// let a;

