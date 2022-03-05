
let plus = document.querySelector("#plus");
let imgListContainer = document.querySelector(".img-list-container");
let imgShowContainer = document.querySelector(".img-show_container");
// cid ,url
let imgsArr = [];
// dhyan dena padega 
let uniqueIdentifier = 0;
plus.addEventListener("click", function () {
    let imgLink = prompt("please enter img url");
    // img url nahi put kiya hai 
    if (imgLink == null || imgLink == "") {
        alert("Please enter img src");
        return;
    }

    //    add image to List & add Image to show container
    addImageToListandShow(imgLink)
})
function addImageToListandShow(imgLink) {
    // img list
    let previewImg = document.createElement("img");
    previewImg.setAttribute("src", imgLink);
    // img 
    previewImg.setAttribute("cid", uniqueIdentifier);
    previewImg.setAttribute("class", "img_preview");

    // last me add karta hai 
    imgListContainer.appendChild(previewImg);
    //    show image
    setShowImage(imgLink)
    // to enable image chanage on click;
    handleImagFunctionality(uniqueIdentifier, imgLink, previewImg);
    uniqueIdentifier++;
    // console.log(imgsArr);
}
function handleImagFunctionality(uniqueIdentifier, imgLink, previewImg) {
    let imgIdentifierObj = {
        cid: uniqueIdentifier,
        url: imgLink
    }
    imgsArr.push(imgIdentifierObj);
    // images aayi unko click waali feature do
    previewImg.addEventListener("click", function () {
        let CImgid = previewImg.getAttribute("cid");
        // console.log(cid);
        // console.log(imgsArr)
        for (let i = 0; i < imgsArr.length; i++) {
            let imgIdentifierObj = imgsArr[i];
            if (CImgid == imgIdentifierObj.cid) {
                //    wahi url chaiye
                console.log(imgIdentifierObj.url);
                // put kisme apne 
                setShowImage(imgIdentifierObj.url)
            }
        }
    })
}

function setShowImage(imgLink) {
    let innerHtmlBlock =
        ` <span class="material-icons">keyboard_double_arrow_left</span>
    <img class="final_image" src=${imgLink} alt=""> 
    <span class="material-icons">keyboard_double_arrow_right</span>`
    // img show -> replace 
    imgShowContainer.innerHTML = innerHtmlBlock;
}