let fs = require("fs");
console.log("Before");
// line bottle neck 
// files , db , image process -> background
// mean while i can do other 
// let content = fs.readFileSync("f1.html");
// read -> start and i will send it to someone else
// async function -> data , cb 
fs.readFile("f11.html", cb);
//nodejs -> error first callbacks 
function cb(err,content) {
    if (err) {
        console.log(err)
    } else if(err==null) {
        console.log("content =>" + content);
    }
}
console.log("After");
console.log("other work");
// while (true) {

// }

