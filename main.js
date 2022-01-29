
scoreLeftWrist = 0;
scoreRightWrist = 0;
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
chris_status = "";
harry_status = "";

    function preload(){

        HarryPotter = loadSound("Harry Potter.mp3");
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

        chris_status = Christmas.isPlaying();
        harry_status = HarryPotter.isPlaying();
    
        fill("#FF0000");
        stroke("FF0000");
    
        
    
    if(scoreRightWrist > 0.2) {
    
        circle(rightWristX,rightWristY,20);

        HarryPotter.stop();
    
        if(chris_status == false){
    
            document.getElementsById("s_name").innerHTML = "Song - Christmas";
            Christmas.play();
        }
    
    
    
    }
    
    
    
        if(scoreLeftWrist > 0.2)
        {
    
            circle(leftWristX,leftWristY,20);

            Christmas.stop();

            if(harry_status == false){
    
                document.getElementsById("s_name").innerHTML = "Song - Harry Potter";
                HarryPotter.play();
            }
        }
    }
    
    
    
    
    
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            scoreLeftWrist = results[0].pose.keypoints[9].score;
            scoreRightWrist = results[0].pose.keypoints[10].score;
            console.log("scoreLeftWrist = " + scoreLeftWrist);
            console.log("scoreRightWrist = " + scoreRightWrist);
    
        
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            console.log("LeftWristX = " + leftWristX + "LeftWristY = " + leftWristY);
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
            console.log("RightWristX = " + rightWristX + "RightWristY = " + rightWristY);
        }
    }
    


