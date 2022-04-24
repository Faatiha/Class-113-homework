function preload(){   
}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 185, 140, 250, 200);
fill("violet");
stroke("pink");
circle(60,60,90);
circle(580,60,90);
circle(60,420,90);
circle(580,420,90);
fill("skyblue");
stroke("white");
rect(45,105,30,270);
rect(565,105,30,270);
rect(105,50,430,30);
rect(105,410,430,30);
}

function take_snapshot(){
save("faatiha.png");
}

