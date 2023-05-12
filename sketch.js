var canvas;
var backgroundImage
var powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var form, player, playerCount;
var car, powerCoins, obstacles;
var blastImage 
var restart

function preload() {
  backgroundImage = loadImage("./assets/maxresdefault.jpg");
  c1= loadImage("./assets/car.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/rock.png");
  obstacle2Image = loadImage("./assets/obstacle.png");
  lifeImage = loadImage("./assets/heart.png");
  blastImage = loadImage("./assets/blast.png")
  //restart = loadImage("./assets/restart.png")
}

function setup() {
  canvas = createCanvas(2000,950);

  ground = createSprite(650, 500, 1100, 20)
  ground.shapeColor = "green"
  ground.velocityX= 5
}

function draw() {
  background(backgroundImage);
  
  if(ground.x>0){

   ground.x = ground.width/2
  }

  drawSprites();
}



function spawnObst(){
  if(frameCount%60===0){
    var obstacle = createSprite(800, random(300, 500),20,20)
    obstacle.addImage(obstacle1Image)
    obstacle.velocityX = -5
    obstacle.scale = 0.1
  }
}