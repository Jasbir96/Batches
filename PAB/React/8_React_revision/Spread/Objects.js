let state ={
    name:'John',
    address:{
        city:'London',
        country:{
            countryName:'United Kingdom',
            countryCode:'UK'
        }
    }
}
// let copy = state;
// copy.name = 'Tushar';
// console.log(state);
// console.log(copy);
//////////////////////////////////////////////////////////////////////////////


let copy = {...state};
copy.name = 'Tushar';
console.log(state);
console.log(copy);
copy.address.city='Delhi';
console.log(state);
console.log(copy);

// Shallow copy for an object that is spread, 
// the uppermost level is created at a new memory space
// the properties of the uppermost level remain the same
//  the lower levels are not affected by this...  
// they keep on pointing to their original references

// let doublecopy = {
//     ...state,
//     address:{
//         ...state.address
//     }
// }
// // doublecopy.address.city='Delhi';
// // console.log(state);
// // console.log(doublecopy);
// doublecopy.address.country.countryName="India";
// console.log(state);
// console.log(doublecopy);

// let deepCopy = {
//     ...state,
//     address:{
//         ...state.address,
//         country:{
//             ...state.address.country
//         }
//     }
// }

// let dcopy = JSON.parse(JSON.stringify(state));
// // console.log(dcopy);
// dcopy.address.country.countryName='India';
// console.log(state);
// console.log(dcopy);
