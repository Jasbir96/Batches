let videoRecorder = document.querySelector("#record-video");
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
            const url = window.URL.createObjectURL(blob);
            // download btn
            let a = document.createElement("a");
            // /download
            a.download = "file.mp4";
            // url 
            a.href = url;
            a.click();
            buffer=[];
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
        videoRecorder.innerHTML = "Recording....";
        recordState = true;
    } else {
        mediaRecorder.stop();
        videoRecorder.innerHTML = "Record";
        recordState = false;
    }
})