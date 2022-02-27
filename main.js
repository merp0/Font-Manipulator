noseX = 0;
noseY = 0;

leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);                                                                                   
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);   
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
     if(results.length > 0)
  {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = "+ noseX + "noseY = "+ noseY);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);

      console.log("leftWristX = "+ leftWristX +"rightWristX = "+ rightWristX);
      console.log("difference = "+ difference);
  }
}

function modelLoaded(){
    console.log("PoseNet Has Been Intialized...");                                          
}
                                                                                        
function draw(){
    background("lightgreen");
    textSize(difference);
    fill('#05C6FA');
    text('Prem', 50, 400);

    document.getElementById("square_side").innerHTML = "Width and Height Of The Text Will be "+ difference +"px"
}