var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
  document.getElementById("Textbox").innerHTML = "";
  recognition.start();
}
recognition.onresult = function run(event) {
  console.log(event);
  var Content = event.results[0][0].transcript;
  console.log(Content);
  document.getElementById("Textbox").innerHTML = Content;
  if (Content == "take my selfie") {
    console.log("Take my selfie");
    Speak();
  }

}

function Speak() {
  var synth = window.speechSynthesis;
  var V2 = "Taking your selfie in 10 seconds";
  var V3 = new SpeechSynthesisUtterance(V2);
  synth.speak(V3);
  Webcam.attach(camera);

  setTimeout(function () {
    Take_snapshot();
    Save();
  },10000);
}
camera = document.getElementById("camera");

Webcam.set({
  width: 350,
  height: 250,
  image_format: 'png',
  png_quality: 100
});

function Take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="Image_1"src="' + data_uri + '"/>';

  });

}
function Save(){
  link=document.getElementById("link");
  V4=document.getElementById("Image_1").src;
  link.href=V4;
  link.click()
}