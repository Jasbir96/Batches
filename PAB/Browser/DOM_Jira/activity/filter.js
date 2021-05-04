'use strict';
let pFilterColor = null;
let allFilterElems = document.querySelectorAll(".filter-colors__container");
for (let i = 0; i < allFilterElems.length; i++) {
    allFilterElems[i].addEventListener("click", function () {
        let filterColorElem = allFilterElems[i].children[0];
        let toFilterColor = filterColorElem.classList[0];
        //  current Ui -> remove
        let ticketElemsArr = document.querySelectorAll(".ticket-container");
        let length = ticketElemsArr.length;
        let reqArr;
        for (let i = 0; i < length; i++) {
            ticketElemsArr[i].remove();
        }
        // show all
        if (pFilterColor != null && pFilterColor == toFilterColor) {
            reqArr = taskArr;
            // filter
            pFilterColor = null;
        } else {
            // filter
            reqArr = taskArr.filter(function (elemobj) {
                return elemobj.color == toFilterColor;
            });

            pFilterColor = toFilterColor;
        }

        //  reqArr -> render 
        reqArr.forEach(function (taskobj) {
            let { task, color, id } = taskobj;
            createTicket(task, color, id);
        });
    })
}