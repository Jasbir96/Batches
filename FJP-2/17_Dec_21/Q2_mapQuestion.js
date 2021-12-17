let members = [
    { g: "m", ages: 20, income: 70 },
    { g: "m", ages: 20, income: 200 },
    { g: "f", ages: 25, income: 100 },
    { g: "f", ages: 30, income: 50 }
]
function smallFunction(elem) {
    //    loop 
    // option1
    let newObj = {};
    for (let key in elem) {
        newObj[key] = elem[key];
    }
    // option2 
    // let newObj = {...elem};
    if (newObj.income < 100) {
        newObj.income *= 2;
    }
    return newObj;
}

let newArray = members.map(smallFunction);
console.log("original",members);
console.log("mapped",newArray);


// array -> primitive vale -> smallere function values
let incomes = [200, 100, 70, 50];

function incomeCalc(elem) {
    if (elem < 100) {
        elem *= 2;
    }
    return elem;
}
let newIncomeArray=incomes.map(incomeCalc);
console.log(newIncomeArray);