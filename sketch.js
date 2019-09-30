let w = 400;
let h = 600;

function setup(){
   // createCanvas(400,400);
    //createCanvas(w,h);
    createCanvas(windowWidth, windowHeight);
    background('black');
}

function draw() {
    //background(0);
    //noStroke();
    strokeWeight(20);
   // stroke('green');
   //fill('orange');
   
    
    
  // rect(0,0,100,100);
    ellipseMode(CENTER);
    ellipse(width/2,height/2,100);
     noFill();
    strokeWeight(1);
    ellipse(mouseX,mouseY,100);
    noFill();
   // stroke('black');
    stroke(20,mouseX,mouseY);
    
    strokeWeight(1);
    triangle(mouseX,mouseY,300,300,100,300);
   // fill('whitesmoke');
   // rectMode(CENTER);
    rect(200,200,200,200);
    
}

function windowResized () {
    resizeCanvas(windowWidth,windowHeight);
}