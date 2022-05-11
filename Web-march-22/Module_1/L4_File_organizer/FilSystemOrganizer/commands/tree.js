function treeFn(dirPath) {
    console.log("Tree command Executed with the path",
        dirPath != undefined ? dirPath : process.cwd());
}
module.exports = {
    treeFn: treeFn
}