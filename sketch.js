var fixedRect, movingRect
var object1, object2, oject3, oject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(500, 200, 100, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(300,200,80,40);
  movingRect.shapeColor = "green";

  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "green";
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "green";
  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "green";
  object4 = createSprite(400,100,50,50);
  object4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  if(isTouching(movingRect,object1)){
    object1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }else{
    object1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  drawSprites();
}