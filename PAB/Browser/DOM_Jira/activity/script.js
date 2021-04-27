let filterOptions = document.querySelectorAll(".filter-colors__container");
let mainContainer = document.querySelector(".main-container");
for (let i = 0; i < filterOptions.length; i++) {
    filterOptions[i].addEventListener("click", function () {
        let arr = filterOptions[i].children;
        // present classes
        // console.log(arr[1]);
        let chclassesArr = arr[0].classList;
        // console.log(classesArr[1]);
        mainContainer.style.backgroundColor = chclassesArr[0];


    });
}