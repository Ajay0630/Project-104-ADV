Webcam.set({width: 350, height: 300, image_format: 'png', png_quality: 90});
camera = document.getElementById("camera");
Webcam.attach(camera);
function captureImage(){
    document.getElementById("identify-button").outerHTML = '<button id="identify-button" class="btn btn-outline-secondary" onclick="identifyObject()">Identify Family Member</button>'
    console.log("Capturing Image...");
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="The_image_Taken" style="width: 350px; height: 275px;" src="'+data_uri+'">'});
    console.log("Captured Image Successfully.");
}
console.log("ml5 version:", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Lqtw2pggM/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model imported successfully");
}
console.error("There is no error to debug. Sorry.");

function getTime() {
        var today = new Date();
        var tfhour = today.getHours();
        if (tfhour > 12){
            var rlhour = tfhour - 12;
        }
        var minute = today.getMinutes();
        var strminute = minute.toString();
        if (minute < 10){
            strminute = "0" + strminute;
        }
        var time = rlhour + ":" + strminute;
        document.getElementById("time").innerHTML = "The time is " + time + ".";
        console.log(time);
}