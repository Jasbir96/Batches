
let videoElem = document.querySelector("video");
// 1. 
let recordBtn = document.querySelector(".record");
let captureImgBtn = document.querySelector(".click-image")
let filterArr = document.querySelectorAll(".filter");
let filterOverlay = document.querySelector(".filter_overlay");
let timings = document.querySelector(".timing");
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let isRecording = false;
let filterColor = "";
let counter = 0;
let clearObj;
let scaleLevel = 1;

// user  requirement send 
let constraint = {
    audio: true, video: true
}
// represent future recording
let recording = [];
let mediarecordingObjectForCurrStream;
// promise 
let usermediaPromise = navigator
    .mediaDevices.getUserMedia(constraint);
// /stream coming from required
usermediaPromise.
    then(function (stream) {
        // UI stream 
        videoElem.srcObject = stream;
        // browser
        mediarecordingObjectForCurrStream = new MediaRecorder(stream);
        // camera recording add -> recording array
        mediarecordingObjectForCurrStream.ondataavailable = function (e) {

            recording.push(e.data);
        }
        // download
        mediarecordingObjectForCurrStream.addEventListener("stop", function () {
            // recording -> url convert 
            // type -> MIME type (extension)

            const blob = new Blob(recording, { type: 'video/mp4' });
            const url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.download = "file.mp4";
            a.href = url;
            a.click();
            recording = [];
        })

    }).catch(function (err) {
        console.log(err)
        alert("please allow both microphone and camera");
    });
recordBtn.addEventListener("click", function () {
    if (mediarecordingObjectForCurrStream == undefined) {
        alert("First select the devices");
        return;
    }
    if (isRecording == false) {
        mediarecordingObjectForCurrStream.start();
        // recordBtn.innerText = "Recording....";
        recordBtn.classList.add("record-animation");
        startTimer();
    }
    else {
        stopTimer();
        mediarecordingObjectForCurrStream.stop();
        // recordBtn.innerText = "Record";
        recordBtn.classList.remove("record-animation");
    }
    isRecording = !isRecording
})
captureImgBtn.addEventListener("click", function () {
    // canvas create 
    let canvas = document.createElement("canvas");
    canvas.height = videoElem.videoHeight;
    canvas.width = videoElem.videoWidth;
    let tool = canvas.getContext("2d");
    // scaling
    // top left corner
    tool.scale(scaleLevel, scaleLevel);
    const x = (tool.canvas.width / scaleLevel - videoElem.videoWidth) / 2;
    const y = (tool.canvas.height / scaleLevel - videoElem.videoHeight) / 2;
    // console.log(x, y);
    tool.drawImage(videoElem, x, y);
    if (filterColor) {
        tool.fillStyle = filterColor;
        tool.fillRect(0, 0, canvas.width, canvas.height);
    }

    let url = canvas.toDataURL();
    let a = document.createElement("a");
    a.download = "file.png";
    a.href = url;
    a.click();
    a.remove();
    // videoELement
})
// filter Array
for (let i = 0; i < filterArr.length; i++) {
    filterArr[i].addEventListener("click", function () {
        filterColor = filterArr[i].style.backgroundColor;
        filterOverlay.style.backgroundColor = filterColor;
    })
}

function startTimer() {
    timings.style.display = "block";
    function fn() {
        // hours
        let hours = Number.parseInt(counter / 3600);
        let RemSeconds = counter % 3600;
        let mins = Number.parseInt(RemSeconds / 60);
        let seconds = RemSeconds % 60;
        hours = hours < 10 ? `0${hours}` : hours;
        mins = mins < 10 ? `0${mins}` : `${mins}`;
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        timings.innerText = `${hours}:${mins}:${seconds}`
        counter++;
    }
    clearObj = setInterval(fn, 1000);
}
function stopTimer() {
    timings.style.display = "none";
    clearInterval(clearObj);
}

minusBtn.addEventListener("click", function () {
    if (scaleLevel > 1) {
        scaleLevel = scaleLevel - 0.1;
        videoElem.style.transform = `scale(${scaleLevel})`;
    }
})
plusBtn.addEventListener("click", function () {
    if (scaleLevel < 1.7) {
        scaleLevel = scaleLevel + 0.1;
        videoElem.style.transform = `scale(${scaleLevel})`;
    }
})