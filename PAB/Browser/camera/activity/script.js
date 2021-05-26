let videoElem = document.querySelector("video");
// 1. 
let recordBtn = document.querySelector(".record");
let captureImgBtn = document.querySelector(".click-image")
let filterArr = document.querySelectorAll(".filter");
let filterOverlay = document.querySelector(".filter_overlay");
let isRecording = false;
let filterColor = "";
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
        recordBtn.innerText = "Recording....";
    }
    else {
        mediarecordingObjectForCurrStream.stop();
        recordBtn.innerText = "Record";
    }
    isRecording = !isRecording
})
captureImgBtn.addEventListener("click", function () {
    // canvas create 
    let canvas = document.createElement("canvas");
    canvas.height = videoElem.videoHeight;
    canvas.width = videoElem.videoWidth;
    let tool = canvas.getContext("2d");
    tool.drawImage(videoElem, 0, 0);
    if(filterColor){
        tool.fillStyle=filterColor;
        tool.fillRect(0, 0,canvas.width,canvas.height);
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
