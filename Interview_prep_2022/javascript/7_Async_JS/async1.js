console.log("Before");
let halt=true;
setTimeout(function(){
    console.log("between");
    halt=false;
},
1000);
while(halt){
}
console.log("After");



// What is setTimeout -> yes , 
// is it part of JS -> not part of JS??