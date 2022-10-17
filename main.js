var nose_x = 0;
var nose_y = 0;

var Lwrist_x = 0;
var Rwrist_x = 0;

var difference = 0;

function setup() {
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');

}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
      nose_x = results[0].pose.nose.x;
      nose_y = results[0].pose.nose.y;

      Lwrist_x = results[0].pose.leftWrist.x;
      Rwrist_x = results[0].pose.rightWrist.x;

      difference =floor( Lwrist_x - Rwrist_x );
      
    }


}
