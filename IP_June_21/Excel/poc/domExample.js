// represents a simple DOM example 
// tree represent 
// element get page
// represent actual element
// let input = document.querySelector(".input");
// let button = document.querySelector(".add");
let ul = document.querySelector("ul");
// button.addEventListener("click", function () {
//     let ans = input.value;
//     // alert(ans);
//     let li = document.createElement("li");
//     li.innerText = ans;
//     li.setAttribute("class", "task");
//     ul.appendChild(li);
//     input.value = "";
// })
for (let i = 0; i < 26; i++) {
    // let li = document.createElement("li");
    // li.innerText = String.fromCharCode(65 + i);
    // li.setAttribute("class", "task");
    // ul.appendChild(li);
    let str = "<li class='task'> " + String.fromCharCode(65 + i) + "</li>";
    ul.innerHTML = str;

}
