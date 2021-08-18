var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimage
var leaf,leafimage
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage=loadImage("apple.png")
  leafimage= loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX,
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createapple();
  drawSprites();
}
function createapple() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    apple = createSprite(400,0,40,10);
    apple.addImage(appleimage)
    apple.x = Math.round(random(0,400))
    apple.scale = 0.1;
    apple.velocityY= 3;
    
    
    //assigning lifetime to the variable
    apple.lifetime = 134
    
    //adjust the depth
    apple.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
    }
}
