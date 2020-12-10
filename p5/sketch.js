
var reset = true;

/* eyes */
var eyes = [];
var numEyes = 100;
let eyeImg;

let pg;//mouse trace

let changeTime=0;
let whisper;
let gif;


function preload() {
    eyeImg = loadImage('images/eye.png');
    whisper = loadSound("sound/whisper.mp3");
    gif = loadImage("../images/female.gif");

    // whisper = new p5.AudioIn("sound/whisper.mp3");
    // whisper.start();
    // getAudioContext().resume();

    // whisper = async () => {
    //     try {
    //         return await loadSound("sound/whisper.mp3");
    //         console.log("LOAD SUCCESSFULLY!!");
    //     } catch (e) {
    //         console.log("LOAD FAIL!!", e);
    //     }
    // }
}

// Setup
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(RGB,255,255,255,1);
    // background(0);
    whisper.play();
    gif.pause();
    // whisper.resume().then(() => {
    //     console.log('Playback resumed successfully');
    // });
    // whisper.loop();
    // whisper.setVolume(0.5);
     
    // Create Eyes
     for (i = 0; i < numEyes; i++) {    
        var x = random(width);
        var y = random(height);      
        eyes[i] = new Eye(x, y);
       }
   
       pg = createGraphics(window.innerWidth, window.innerHeight); //to be fixed
}
//Particle
function Eye(x, y) {
  this.x = x;
  this.y = y;

    // Properties
    this.size = random(5,15);
    this.maxSpeed = random(5, 10);
    this.maxForce = random(0.01,4);
    this.mass = this.size; //this.size * this.size * PI;
  
    // Motion
    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);
    var initV = 30;
    this.vel = createVector(random(-initV, initV), random(-initV, initV));

    // External Forces
    this.applyForce = function(force) {
        var f = force.copy();
        f.div(this.mass);
        this.acc.add(f);
    }

    // Behaviors
    this.seek = function(target) {
      var desired = p5.Vector.sub(target, this.pos);
        desired.setMag(this.maxSpeed);
        var steering = p5.Vector.sub(desired, this.vel);
        steering.limit(this.maxForce);
        this.applyForce(steering);
    }

    // Handle Updates
    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }
  
  

    // Draw
    this.display = function() {
        
        push();
      
        translate(this.pos.x, this.pos.y);
        imageMode(CENTER);
        image(eyeImg,this.size,this.size,50,50);
        pop();
    }

   // Handle Edges
    this.edges = function() {
        if (this.pos.y > height) {
            this.pos.y = 0 - this.size;
        } else if (this.pos.y < 0) {
            this.pos.y = height + this.size;
        }
        if (this.pos.x > width + this.size) {
            this.pos.x = 0 - this.size;
        } else if (this.pos.x < 0 - this.size) {
            this.pos.x = width + this.size;
        }
    }
}
function playGif(){
    console.log(mouseX);
    if(mouseX>100 && mouseY>100){
        gif.play();
        
    }
    else{
        gif.pause();
    }
}

// Update Canvas
function draw() {
    
    clear();

    pg.stroke(47, 46, 46,80); // fix the stroke style
    pg.strokeWeight(6);
    pg.line(mouseX, mouseY, pmouseX, pmouseY);
    image(pg, 0, 0);
    image(gif,10,10);
    this.playGif();

    var target = createVector(mouseX, mouseY);
    for (i = 0; i < numEyes; i++) {
        eyes[i].seek(target);
        eyes[i].display();
        eyes[i].update();
    }

}



