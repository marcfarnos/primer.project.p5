let ampladaquadrat = 100;
let mic;


function setup() {
  createCanvas(600, 600,);
  background(0);
  noStroke();
    mic = new p5.AudioIn();
    mic.start();
    
}

function draw() {
  var boca_w = width/1.2;
  micLevel = mic.getLevel();
    mov= map(micLevel, 0, 1, 10, 500);
  
  noStroke();
  push();
  translate(width/2, height/2);
  rectMode(CENTER);
  
//fons de la boca
  
  fill('red');
  ellipse(7, 80, 300, 250);
  
  //llengua
  fill('purple');
  rect(0,140,200,90+mov,100+mov);
  
  //dents
    
    fill('whitesmoke');
  rect(0,35,310,50+mov,3+mov);
    
    fill('white');
  rect(0,44,290,50+mov,3+mov);
    
    fill('whitesmoke');
  rect(0,47,250,50+mov,3+mov);
  fill('white');
  rect(0,50,250,50+mov,3+mov);
  
    //dents
  fill('white');
  rect(0,55,170,50+mov,3+mov);
    //dents
  fill('whitesmoke');
  rect(0,60,100,50+mov,3+mov);
    //dents
  fill('white');
  rect(0,70,50,50+mov,3+mov);
    
  //barbeta
  
  fill(200, 214, 141 );
  rect(0,180,300,100+mov,8);
   pop();
  
  //front


  fill(200, 214, 141);
  rect(100,100, 400, 400/1.60+mov,40+mov);
 
  //ull esquerre
 
  fill(255);
  ellipse( width*0.30+mov, height/2.5,60+mov);
  fill('red');
  ellipse(width*0.30+mov, height/2.5,10+mov);
  
  //ull dret
  fill(255);
  ellipse( width*0.70, height/2.5,60+mov);
  fill('red');
  ellipse(width*0.70, height/2.5,10+mov);
  
  
  //nas
  noFill();
  stroke(255);
  strokeWeight(10);
  arc(width*0.5,height/1.85,90,70+mov, radians(230), radians(15+mov));
    
    noFill();
  stroke('purple');
  strokeWeight(10);
  arc(width*0.5,height/1.85,70,50+mov, radians(280+mov), radians(15+mov));
}


function touchStarted(){
    getAudioContext().resume();
}