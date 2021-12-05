let sticky = document.querySelector("#sticky");
sticky.addEventListener("click", function (e) {
    let sticky = document.createElement("div");
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML = `<div class="navbar">
<div class="close"></div>
<div class="minimize"></div>
</div>
<textarea name="" class="textarea"></textarea>`;
    body.appendChild(sticky);
    let minimize = sticky.querySelector(".minimize");
    let close = sticky.querySelector(".close");
    let textArea = sticky.querySelector("textarea");
    let isClosed = false;
    minimize.addEventListener("click", function (e) {
        if (isClosed == false) {
            textArea.style.display = "none";
        } else {
            textArea.style.display = "block";
        }
        isClosed = !isClosed
    })
    close.addEventListener("click", function () {
        sticky.remove();
    })
})