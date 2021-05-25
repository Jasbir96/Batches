let videoRecorder = document.querySelector("#record-video");
let capturebtn = document.querySelector("#capture");
let timingELem = document.querySelector("#timing");
let allFilters = document.querySelectorAll(".filter");
let zoomInElem = document.querySelector("#plus-container");
let zoomOutElem = document.querySelector("#minus-container");
let videoContainer = document.querySelector(".video-container");
let clearObj;
let uiFilter = document.querySelector(".ui-filter");
let filterColor = "";
let zoomLevel = 1;
let constraints = {
    video: true,
    audio: true
}
let recordState = false;
let mediaRecorder;
let buffer = [];
let videoElem = document.querySelector("#video-elem");
// local machine
navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
        // feed ui
        videoElem.srcObject = mediaStream;
        // new object 
        mediaRecorder = new MediaRecorder(mediaStream);
        mediaRecorder.addEventListener("dataavailable", function (e) {
            buffer.push(e.data);
        })
        mediaRecorder.addEventListener("stop", function () {
            // covert that data into a blob 
            // mime type
            let blob = new Blob(buffer, { type: "video/mp4" });
            // blob convert -> url
            // const url = window.URL.create ObjectURL(blob);
            addMediaToDB(blob, "video");

            // download btn
            // let a = document.createElement("a");
            // // /download
            // a.download = "file.mp4";
            // // url 
            // a.href = url;
            // a.click();
            buffer = [];
        })
    }
    ).catch(function (err) {
        console.log(err);
    });
videoRecorder.addEventListener("click", function () {
    if (!mediaRecorder) {
        alert("First allow permissions");
        return;
    }
    if (recordState == false) {
        mediaRecorder.start();
        // videoRecorder.innerHTML = "Recording....";
        videoRecorder.classList.add("record-animation");
        startCounting();
        recordState = true;
    } else {
        mediaRecorder.stop();
        videoRecorder.classList.remove("record-animation");
        stopCounting();
        recordState = false;
    }
})
capturebtn.addEventListener("click", function () {
    // create a canvas element
    // equal to your video frame
    let canvas = document.createElement("canvas");
    canvas.width = videoElem.videoWidth;
    canvas.height = videoElem.videoHeight;
    let tool = canvas.getContext("2d");
    capturebtn.classList.add("capture-animation");
    // draw a frame on that canvas
    // ctx.translate(canvas.width / 2, canvas.height / 2)
    // tool.scale(zoomLevel, zoomLevel);
    // /x,y

    tool.scale(zoomLevel, zoomLevel);
    let x = (canvas.width / zoomLevel - canvas.width) / 2;
    let y = (canvas.height / zoomLevel - canvas.height) / 2;
    tool.drawImage(videoElem, x, y);
    // translucent 
    if (filterColor) {
        tool.fillStyle = filterColor;
        tool.fillRect(0, 0, canvas.width, canvas.height);
    }

    // above layer things are drawn
    // toDataUrl 
    let link = canvas.toDataURL();
    addMediaToDB(link, "img");
    // download 
    // let anchor = document.createElement("a");
    // anchor.href = link;
    // anchor.download = "file.png";
    // anchor.click();
    // anchor.remove();
    // canvas.remove();
    // i need one secomd of that animation
    setTimeout(function () {
        capturebtn.classList.remove("capture-animation");
    }, 1000)
})
function startCounting() {
    timingELem.classList.add("timing-active");
    let timeCount = 0;
    clearObj = setInterval(function () {
        let seconds = (timeCount % 60) < 10 ? `0${timeCount % 60}` : `${timeCount % 60}`;
        let minutes = (timeCount / 60) < 10 ? `0${Number.parseInt(timeCount / 60)}` : `${Number.parseInt(timeCount / 60)}`;
        let hours = (timeCount / 3600) < 10 ? `0${Number.parseInt(timeCount / 3600)}` : `${Number.parseInt(timeCount / 3600)}`;
        timingELem.innerText = `${hours}:${minutes}:${seconds}`;
        timeCount++;
    }, 1000);
}
function stopCounting() {
    timingELem.classList.remove("timing-active");
    timingELem.innerText = "00: 00: 00";
    clearInterval(clearObj);
}
// filter apply
for (let i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", function () {
        // add filter to ui
        let color = allFilters[i].style.backgroundColor
        if (color) {
            uiFilter.classList.add("ui-filter-active");
            uiFilter.style.backgroundColor = color;
            filterColor = color;
        } else {
            uiFilter.classList.remove("ui-filter-active");
            uiFilter.style.backgroundColor = "";
            filterColor = "";

        }
    })
}


// zoom in zoom out
zoomInElem.addEventListener("click", function () {
    if (zoomLevel < 3) {
        zoomLevel += 0.2;
        videoElem.style.transform = `scale(${zoomLevel})`;
    }
})
zoomOutElem.addEventListener("click", function () {
    if (zoomLevel > 1) {
        zoomLevel -= 0.2;
        videoElem.style.transform = `scale(${zoomLevel})`;
    }
})


