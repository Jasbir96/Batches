let topRow = document.querySelector(".top_row");
let leftCol = document.querySelector(".left_col");
for (let i = 1; i <= 100; i++) {
    // create a cell
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div);
}
for (let i = 1; i <= 26; i++) {
    // create a cell
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(i + 64);
    topRow.appendChild(div);
}