
let plus = document.querySelector("#plus");
let imgListContainer = document.querySelector(".img-list-container");
let parentImg = document.querySelector(".parent-img");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let deleteIcon = document.querySelector(".delete-img");
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
    setShowImage(imgLink, uniqueIdentifier)
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
        // let CImgid = previewImg.getAttribute("cid");
        //    O(1)
        let cImgSrc = previewImg.getAttribute("src");
        setShowImage(cImgSrc);

        // console.log(cid);
        // console.log(imgsArr)
        // O(n);
        // for (let i = 0; i < imgsArr.length; i++) {
        //     let imgIdentifierObj = imgsArr[i];
        //     if (CImgid == imgIdentifierObj.cid) {
        //         //    wahi url chaiye
        //         console.log(imgIdentifierObj.url);
        //         // put kisme apne 
        //     }
        setShowImage(imgIdentifierObj.url)
        // }
    })
}
function setShowImage(imgLink, uniqueIdentifier) {
    let innerHtmlBlock = `<img class='final_image' src=${imgLink} alt=""
    cid=${uniqueIdentifier}></img>`
    // img show -> replace 
    parentImg.innerHTML = innerHtmlBlock;
}
right.addEventListener("click", function (e) {

    if (parentImg.children.length != 0) {
        let cShowImg = parentImg.children[0];
        // show image -> image padi hui hai -> cid 
        let cid = cShowImg.getAttribute("cid");
        // cid search -> img array
        for (let i = 0; i < imgsArr.length; i++) {
            let imgDescObj = imgsArr[i];
            if (cid == imgDescObj.cid) {
                // matching img -> idx get
                // idx+1-> url ,cid -> show image wo set kar dunga 
                let nextIdx = (i + 1) % imgsArr.length;
                let newImgObj = imgsArr[nextIdx];
                setShowImage(newImgObj.url, newImgObj.cid);
                return;
            }
        }
    } else {
        alert("No image found");
    }
})
left.addEventListener("click", function (e) {

    if (parentImg.children.length != 0) {
        let cShowImg = parentImg.children[0];
        // show image -> image padi hui hai -> cid 
        let cid = cShowImg.getAttribute("cid");
        // cid search -> img array
        for (let i = 0; i < imgsArr.length; i++) {
            let imgDescObj = imgsArr[i];
            if (cid == imgDescObj.cid) {
                // matching img -> idx get
                // idx+1-> url ,cid -> show image wo set kar dunga 
                // 0=>-1 
                let nextIdx = Math.abs((i - 1) % imgsArr.length);
                let newImgObj = imgsArr[nextIdx];
                setShowImage(newImgObj.url, newImgObj.cid);
                return;
            }
        }
    } else {
        alert("No image found");
    }
})
deleteIcon.addEventListener("click", function (e) {
    if (parentImg.children.length != 0) {
        let cShowImg = parentImg.children[0];
        // show image -> image padi hui hai -> cid 
        let cid = cShowImg.getAttribute("cid");
        // cid search -> img array
        // matching img -> idx get
        removeImage(cid);
    }
    else {
        alert("No image");
    }

})
function removeImage(cid) {
    // 
    parentImg.children[0].remove();
    // preview remove
    let previewChildrens = imgListContainer.children;
    for (let i = 0; i < previewChildrens.length; i++) {
        let cCid = previewChildrens[i].getAttribute("cid");
        if (cCid == cid) {
            previewChildrens[i].remove();
            break;
        }
    }
    for (let i = 0; i < imgsArr.length; i++) {
        let imgDescObj = imgsArr[i]
        if (imgDescObj.cid == cid) {
            imgsArr.splice(i, 1);
            break;
        }
    }

}
// save -> local storage ->save
// delete  -> aapko mil jaayegi
// delete img 

