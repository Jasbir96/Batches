// // let is a block scope -> block -> {}
// let a 
// console.log("2", a); //uf
// a=10;
// function fn() {
//     a++;
//     console.log("6", a); //11
// if (true) {
//   a++;
//     console.log("10", a); //21
// }
//     console.log("12", a); //11
// }
// console.log("14", a); //10
// fn();
// console.log("16", a); //11
// block scope
// let a = 10;
// {
//   let a = 20;
//   {
//     console.log("22",a);
//   }
//   console.log("24",a);
// }
// console.log("26",a);


console.log("30", a); //uf
var a = 10;
function fn() {

  console.log("32", a);
  var a=10;
  a++;
  console.log("35", a); //11
  if (true) {
    console.log("37", a); //11
    var a = 20;
    a++;
    console.log("37", a); //21
  }
  console.log("39", a); //21
}
console.log("41", a); //10
fn();
console.log("43", a); //11