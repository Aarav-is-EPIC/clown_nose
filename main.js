noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/K8c6Bnz5/clown-nose.png');
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet_var=ml5.poseNet(video,modelLoaded);
poseNet_var.on('pose',gotPoses);

}
function draw(){
    image(video,0,0,400,400);
    fill("green");
    stroke("red");
    circle(noseX,noseY,20);
    image(clown_nose,noseX - 15,noseY - 15,50,50);
    



}
function modelLoaded(){
    console.log("PoseNet has loaded.");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("pose x =" + noseX);
        console.log("pose y =" + noseY);
        
    }
    
}