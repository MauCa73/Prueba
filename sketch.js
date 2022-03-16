var ba;
function setup() {
  createCanvas(400,400);
ba=createSprite(200,200,50,50);
}

function draw() 
{
  background(0);
if(keyIsDown(68)){
  ba.position.x=ba.position.x+2;
}
if(keyIsDown(65)){
  ba.position.x=ba.position.x-2;
}
if(keyIsDown(87)){
  ba.position.y=ba.position.y-2;
}
if(keyIsDown(83)){
  ba.position.y=ba.position.y+2;
}



  drawSprites();
}




