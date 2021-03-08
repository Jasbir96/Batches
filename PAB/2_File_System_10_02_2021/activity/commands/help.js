function helperfn() {
    console.log(`List of all the commands:
    node mycli.js view <dir-name> flat
    node mycli.js view <dir-name> tree
    node mycli.js organize <dir-name>
    node mycli.js organize 
    node mycli.js help
`);
}

// nodejs -> export
module.exports={
    fn:helperfn
}
