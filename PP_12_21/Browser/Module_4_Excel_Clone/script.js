
{/* <div class="cell">
                C
            </div> */}


// create cells
// let div = document.createElement("div");
// div.setAttribute("class", "cell");
// div.textContent = "A";
// let topRow = document
//     .querySelector(".top_row");
// topRow.appendChild(div)
// A-> Z
// Ascii -> A
// for loop for prinitng alphabets
let topRow = document
    .querySelector(".top_row");
for (let i = 0; i < 26; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(div)
}
let leftCol = document.querySelector(".left_col");
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div)
}
// 2 d loop -> columns*rows
// grid
let grid = document.querySelector(".grid");
for (let i = 0; i < 100; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < 26; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        // div.textContent = String.fromCharCode(j+65)+(i+1)  
        // div.textContent = i + "," + j
        div.setAttribute("contentEditable", "true")
        //   every cell identification required 
        div.setAttribute("rId", i);
        div.setAttribute("cId", j);
        row.appendChild(div);
    }
    grid.appendChild(row)
}