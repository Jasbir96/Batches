let cTool = "pencil";
let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d");
// console.log(tool);
let body = document.querySelector("body");
// canvas dimesnions set karne ke baad jo changes karoge wahi reflect
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
tool.strokeStyle = "lightpink";