var boxOne, boxTwo;

function setup() {
  createCanvas(500,400);
  boxOne = createSprite(450, 200, 50, 80);
  boxOne.shapeColor = "blue";
  
  boxTwo = createSprite(400,200,80,30);
  boxTwo.shapeColor = "red";

}

function draw() {
  background(0,0,0);  
  boxTwo.x = World.mouseX;
  boxTwo.y = World.mouseY;

  if(isTouching( )){
    console.log("Box collided!");
  }
  else {
    console.log("Box not collided!");
  }
  drawSprites();
}

function isTouching(){
  if (boxTwo.x - boxOne.x < boxOne.width/2 + boxTwo.width/2
    && boxOne.x - boxTwo.x < boxOne.width/2 + boxTwo.width/2
    && boxTwo.y - boxOne.y < boxOne.height/2 + boxTwo.height/2
    && boxOne.y - boxTwo.y < boxOne.height/2 + boxTwo.height/2) {
      
  }
  else {
    
  }
}
