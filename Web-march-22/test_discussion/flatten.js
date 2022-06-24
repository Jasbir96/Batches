let obj = {
    newObj: {
        obj2: {
            obj5: {
                one: 1,
            },
        },
    },
    obj3: {
        obj4: { two: 2 },
    },
}

// ouput:  {'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 } 
function flatten(obj, flattenkey, flattenObj) {

    for (let key in obj) {
        let currentEntry = obj[key];
        // an object or an simple element
        console.log(key);
        if (typeof currentEntry == 'object') {
        flatten(currentEntry, flattenkey + "." + key, flattenObj);
        } else {
            flattenObj[flattenkey + "." + key] = obj[key];
        }
    }

}
let flattenObj = {};
flatten(obj, "", flattenObj);
console.log(flattenObj);