var ship, ship_running, edges;
var seaImage;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,200);

  //creating ship
  ship = createSprite(50,160,20,50);
  ship.addAnimation("running",ship_running);
  edges = createEdgeSprites();

  //adding scale and position to ship
  ship.scale = 0.5;
  ship.x = 50

  
}

function draw() {
  //set background color
  background("blue");

  //logging the y position of the trex
  console.log(ship.y)

  //jump when space key is pressed
  if(keyDown("space")){
    ship.velocityY = -10;
  }

  ship.velocityY = ship.velocityY + 0.5;

  //stop ship from falling down 
  ship.conllide(edges[3])

  //code to resetting the background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }


  drawSprite();
}
