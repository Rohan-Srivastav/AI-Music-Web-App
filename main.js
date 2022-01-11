song = "";

leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;

function preload(){

    HarryPotter = loadSound("Harry Potter.mp3");
    HarryPotterRemix = loadSound("music.mp3");
    WarRobots = loadSound("War Robots.mp3");
    Christmas = loadSound("Christmas.mp3");
} 


function  setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("PoseNet Is Initialized !!");
}

function draw(){
    image(video, 0, 0, 600, 500);
}



function play(){



    s_name = document.getElementById("song_name").value;

    if(s_name == "HarryPotter"){
        song = HarryPotter;
        song.play();

    }
    else if(s_name == "HarryPotterMix"){
        song = HarryPotterRemix;
        song.play();

       
    }

    else if(s_name == "WarRobots"){
        song = WarRobots;
        song.play();
    }

    else if(s_name == "Christmas"){
        song = Christmas;
        song.play();
    }

    song.setVolume(1);
    song.rate(1);

   
}

function stop(){

    HarryPotter.stop();
    HarryPotterRemix.stop();
    WarRobots.stop();
    Christmas.stop();

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = " + leftWristX + "LeftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightWristX + "RightWristY = " + rightWristY);
    }
}
