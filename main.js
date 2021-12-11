song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("Gangnam_Style.mp3");
    song2 = loadSound("My_Little_pony.mp3");
}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.hide();

    canvas = createCanvas(550, 550);
    canvas.position(675, 350);
}

function draw(){
    image(video, 0, 0, 550, 550);
}