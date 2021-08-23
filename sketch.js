var player
var player_running
var zombie
var zombie_running
var background
var invisibleGround
var barrier
var barrierImage
var rock
var rockImage
function preload(){
    player_running = loadAnimation("game1 - Copy.png","game2 (1).png","game3.png","game4.png","game5.png","game6.png")
    zombie_running = loadAnimation("ZOMBIE1.png","ZOMBIE2.png","ZOMBIE3.png","ZOMBIE4.png","ZOMBIE5.png","ZOMBIE6.png","ZOMBIE7.png","ZOMBIE8.png")
    backgroundImage = loadImage("Game Background-3.png")
    barrierImage = loadImage("barrier.png") 
    rockImage = loadImage("rock.png") 
  }
function setup() {
  createCanvas(800,400);
  ground = createSprite(400,200,800,400)
  ground.addImage(backgroundImage)
  ground.x = ground.width /2;
  ground.velocityX = -2
  ground.scale = 1.6

  invisibleGround = createSprite(400,380,800,10)
  invisibleGround.visible = false

  player = createSprite(200,300,50,50)
  player.addAnimation("game1 - Copy.png", player_running)
  player.scale = 1.2

  zombie = createSprite(1200,280,50,50)
  zombie.addAnimation("zombie1.png",zombie_running)
  zombie.scale = 1.8
  zombie.velocityX = -6

  barrier = createSprite(800,340,10,10)
  barrier.addImage(barrierImage)
  barrier.scale = 0.4
  barrier.velocityX = -7

  
  rock = createSprite(1600,340,10,10)
  rock.addImage(rockImage)
  rock.scale = 0.2
  rock.velocityX = -7
}
function draw() {
  background("black");
  if (ground.x < 0){
    ground.x = ground.width/2;
  }  
   
  if(keyDown("space") && player.y >= 100) {
    player.velocityY = -12;
  }
  
  if(barrier.position.x < -500){
    barrier.position.x = 800
  }
  if(rock.position.x < -1000){
    rock.position.x = 1600
  }
  player.velocityY = player.velocityY + 0.6
  player.collide(invisibleGround) 
  drawSprites();
}