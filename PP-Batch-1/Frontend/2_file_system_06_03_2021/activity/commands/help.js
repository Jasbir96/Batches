function helper() {
    console.log(`List of all the commands
    1. node mycli.js view <dirname> tree
    2. node mycli.js view <dirname> flat
    3. node mycli.js organize <dirname>
    4. node mycli.js help`);
}
module.exports = {
    helpfn: helper
}