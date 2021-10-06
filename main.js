image = "";
status="";
object=[];
function preload(){
    video = createCapture(VIDEO);
    video.hide(); 

}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();
    video = createCapture(VIDEO);
    video.hide(); 
}



function draw(){
    image(video,0,0,480,380);
    
} 

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("g").innerHTML="Status : Undetected";
}

function modelLoaded(){
    video.loop();
    video.volume(0);
    video.speed(1);
    console.log('yay');
}