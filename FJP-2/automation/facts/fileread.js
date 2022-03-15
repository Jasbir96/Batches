let fs = require("fs");
// console.log("Before")
// synchronous
// let hexa = fs.readFileSync("f1.txt");
// let content = hexa + "";
// console.log(content);
// console.log("After");
// callback -> async (Difficult to a beginner) ;
// console.log("Before");
// fs.readFile("f1.txt", function (err, hexa) {
//     let content = hexa + "";
//     console.log(content);
// })
// console.log("After");
// 1. callback based fn alternative promise based -> code better way  
// 2. these fn (env /Lib/Node) they give you a token 
// 3. if you want to get value out of token then you have to use await  and 
// 4. to use await you have to put it in async fn
// 5. agar isme kahi bhi hamne await lagaya to aapka fn fn stack se remove ho 
//  jaayega 
console.log("Before");
async function fn() {
    console.log("in fn before fs promise")
    let token = fs.promises.readFile("f1.txt");
    console.log("in fn before await")
    let hexa = await token;
    let content = hexa + "";
    console.log(content);
}
fn();
console.log("After");