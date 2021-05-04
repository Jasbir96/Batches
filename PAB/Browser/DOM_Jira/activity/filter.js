let allFilterElems = document.querySelectorAll(".filter-colors__container");
for (let i = 0; i < allFilterElems.length; i++) {
    allFilterElems[i].addEventListener("click", function () {
        let filterColorElem = allFilterElems[i].children[0];
        let toFilterColor = filterColorElem.classList[0];
        let reqArr = taskArr.filter(function (elemobj) {
            return elemobj.color == toFilterColor;
        });
        console.log(reqArr);
        //  current Ui -> remove
        let ticketElemsArr = document.querySelectorAll(".ticket-container");
        let length = ticketElemsArr.length
        for (let i = 0; i < length; i++) {
            ticketArr[i].remove();
        }
        //  reqArr -> render 
        reqArr.forEach(function (taskobj) {
            let { task, color, id } = taskobj;
            createTicket(task, color, id);
        });
    })
}
