let root = {
    name: "d10",
    children: [{
        name: "d20",
        children: [
            {
                name: "d50",
                children: []
            }, {
                name: "d60",
                children: []
            }
        ]
    },
    {
        name: "d30",
        children: [{
            name: "d70",
            children: []
        }]
    }, {
        name: "d40",
        children: []
    }
    ]
}
// expectation
// faith ?? , base case ??
function displayGtree(node) {
    // d10-> d20,d30,d40
    let menMYChild = "" + node.name + "->";
    for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        menMYChild += child.name + ","
    }
    console.log(menMYChild);
    // faith
    for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        displayGtree(child);
    }
}
// d10
displayGtree(root);