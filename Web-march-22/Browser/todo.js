// button
let button = document.querySelector("button");
// input
let input = document.querySelector("input");
// ul
let ul = document.querySelector("ul");
// to listen to an event -> and run our logic after that event
button.addEventListener("click", fn);
function fn() {
    let task = input.value;
    if (task) {
        let li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);

        input.value = "";
    } else {
        alert("Enter some task");
    }
}
