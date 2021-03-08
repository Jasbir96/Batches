
let root = {
    name: "d10",
    children: [
        {
            name: "d20",
            children: [{
                name: "d50",
                children: []
            }, {
                name: "d60",
                children: []
            }]
        },
        {
            name: "d30",
            children: [{
                name: "d70",
                children: []
            }]
        },
        {
            name: "d40",
            children: [

            ]
        }
    ]
}
// print
// logic -> folders
// expectation
function displayGtree(node) {
    let menMyCh = "" + node.name + "=>";
    for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        menMyCh += child.name + ",";
    }
    console.log(menMyCh);
    // faith-> children ,base case ??
    for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        displayGtree(child)
    }
}
displayGtree(root);

// poc
    // f10
        // f20
            //   f1.txt*
              //f40
        // f30
            // f50
            // f60
        // f1.txt*







