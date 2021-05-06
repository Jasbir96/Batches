// alert("Hello from JS")
;
let arr = [];
// get -> first elment 
let inputBox = document.querySelector(".input-box");
let ul = document.querySelector(".task-list");
if (localStorage.getItem("allTask")) {
    let strArr = localStorage.getItem("allTask");
    arr = JSON.parse(strArr);
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        // append 
        ul.appendChild(li);
        li.textContent = arr[i];
        li.setAttribute("class", "task");
        li.addEventListener("dblclick", function delFN() {
            // li.remove();
            // console.log("i was dbl clicked",li.innerText)
            let idx = arr.indexOf(li.innerText);
            arr.splice(idx, 1);
            let strArr = JSON.stringify(arr);
            localStorage.setItem("allTask", strArr);
            li.remove();
        });

    }
}
// listener
// document -> form -> value // rest -> textContent
inputBox.addEventListener("keydown", function (object) {
    //    console.log("event object ",object);
    console.log("event");
    if (object.key == "Enter" && inputBox.value != "") {
        let value = inputBox.value;
        // console.log("value ", value);
        // create 
        let li = document.createElement("li");
        // append 
        ul.appendChild(li);
        li.textContent = value;
        arr.push(value);
        let strArr = JSON.stringify(arr);
        localStorage.setItem("allTask", strArr);
        // set Attribute
        li.setAttribute("class", "task");
        li.addEventListener("dblclick", function delFN() {
            // li.remove();
            // console.log("i was dbl clicked",li.innerText)
            li.remove();
            // remove localStorage
            let idx = arr.indexOf(li.innerText);
            arr.splice(idx, 1);
            let strArr = JSON.stringify(arr);
            localStorage.setItem("allTask", strArr);
        });
        inputBox.value = "";
    }
})


// get Item 
// set Item 
// clear
// removeItem

