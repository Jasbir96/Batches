let leftCol = document.querySelector(".left_col");
let rows = 100;
for (let i = 0; i < rows; i++) {
    let colBox = document.createElement("div");
    colBox.innerText = i + 1;
    colBox.setAttribute("class", "box"); 
    leftCol.appendChild(colBox);
}