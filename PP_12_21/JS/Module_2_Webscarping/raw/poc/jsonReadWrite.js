let fs = require("fs");
// object ,array 
// object -> contain string as key 
// {
//     "name": "Jasbir"
// }
// let input = ["hello", "hi", "how are you"];
// write
// let jsonWriteAble = JSON.stringify(input);
// fs.writeFileSync("abc.json", jsonWriteAble);
// read 
let content = fs.readFileSync("abc.json");
let jsonData = JSON.parse(content);
// append
jsonData.push("Hola");
let jsonWriteAble = JSON.stringify(jsonData);
fs.writeFileSync("abc.json", jsonWriteAble);

