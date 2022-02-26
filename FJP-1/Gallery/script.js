let plus = document.querySelector("#plus");
let imgListContainer = document.querySelector(".img-list-container");
let imgShowContainer = document.querySelector(".img-show_container");
plus.addEventListener("click", function () {
    let imgLink = prompt("please enter img url");
    if (imgLink == null || imgLink == "") {
        alert("Please enter img src");
        return;
    }
    addImageToListandShow(imgLink)
    //    add image to List & add Image to show container
})
function addImageToListandShow(imgLink) {
    // img list
    let previewImg = document.createElement("img");
    previewImg.setAttribute("src", imgLink)
    previewImg.setAttribute("class", "img_preview");
    // last me add karta hai 
    imgListContainer.appendChild(previewImg);
    let innerHtmlBlock =
    ` <span class="material-icons">keyboard_double_arrow_left</span>
    <img class="final_image" src=${imgLink} alt=""> 
    <span class="material-icons">keyboard_double_arrow_right</span>`
    // img show -> replace 
    imgShowContainer.innerHTML = innerHtmlBlock;
}
