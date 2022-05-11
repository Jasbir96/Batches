function organizeFn(dirPath) {
    console.log("Organize command Executed with the path",
        dirPath != undefined ? dirPath : process.cwd());
}
module.exports = {
    organizeFn: organizeFn
}