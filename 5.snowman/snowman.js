//5. snowman

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){

  //background
  fill("lightBlue");
  stroke("lightblue");
  rect(20,20,520,650);
//bottomcircle
  fill("white");
  stroke("grey");
  strokeWeight(5);
  ellipse(270,430,220,220);
//middlecircle
  fill("white");
  stroke("grey");
  strokeWeight(5);
  ellipse(270,280,160,160);
//topcircle
  fill("white");
  stroke("grey");
  strokeWeight(5);
  ellipse(270,150,130,130);
//nose
  fill("orange");
  stroke("orange");
  strokeWeight(1);
  triangle(270,200,280,160,260,160);
//eyes
  fill("black");
  stroke("black");
  ellipse(295,140,25,25);
  ellipse(245,140,25,25);

}
