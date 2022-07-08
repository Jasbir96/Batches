let topRow = document.querySelector(".top_row");
let leftCol = document.querySelector(".left_col");
let grid = document.querySelector(".grid");
// left column ke cells
for (let i = 1; i <= 100; i++) {
    // create a cell
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div);
}
// top row ke cells
for (let i = 1; i <= 26; i++) {
    // create a cell
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(i + 64);
    topRow.appendChild(div);
}
// grid 
for (let i = 1; i <= 100; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 1; j <= 26; j++) {
        let col = document.createElement("div");
        col.setAttribute("class", "cell");
        col.textContent = `${String.fromCharCode(64 + j)} - ${i}`
        row.appendChild(col);
    }
    grid.appendChild(row);
}