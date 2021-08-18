leftWrist_x = 0;
rightWrist_x = 0;

difference = 0; 

function preload(){

}

function setup() { 
    video = createCapture(VIDEO); 
    video.size(450, 400); 
    
    canvas = createCanvas(450, 450); 
    canvas.position(800,125); 
    
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses); 
}

function draw(){ 
    background('#6C91C2'); 
    textSize(difference); 
    fill('#FFE787'); 
    text('Saanika', 50, 400); }

function modelLoaded(){
    console.log("PoseNet is initialised"); 
}

function gotPoses(results) { 
    if(results.length > 0) { 
        console.log(results); 
        leftWrist_x = results[0].pose.leftWrist.x; 
        rightWrist_x = results[0].pose.rightWrist.x; 
        difference = floor(leftWrist_x - rightWrist_x); 
        console.log("leftWristX = " + leftWrist_x + " rightWristX = "+ rightWrist_x + " difference = " + difference); 
} }