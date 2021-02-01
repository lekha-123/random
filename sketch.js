var PLAY =1;
var END =0 ;
var gamestate=1; 
var monkey , monkey_running,monkey1;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;jsafdahfod

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500,300);
  
  monkey = createSprite(80,200,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.12;
  
  ground = createSprite(400,250,100000,30);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
bananaGroup = createGroup();
  obstacleGroup = createGroup();

  monkey1 = createSprite(80,200,20,20);
  monkey1.addAnimation("running",monkey_running)
  monkey1.scale = 0.12;
  
}


function draw() {
  monkey.collide(ground);
background(rgb(50,222,300));
  text("SURVIVAL TIME: "+score,350,50)
  
  drawSprites();
  
 if (frameCount % 100 === 0){
   var obstacle = createSprite(500,219,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1
   obstacle.lifetime=100;
   obstacle.velocityX = -6;
  }
  
  if (frameCount % 100 === 0){
   var banana = createSprite(500,Math.round(random(120,180)),20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX = -6;
    banana.lifetime=100
    bananaGroup.add(banana);

}
  if(monkey.isTouching(obstacleGroup)){
  obstacleGroup.setLifetimeEach(-1);
  
  obstacleGroup.setVelocityXEach(0);
  ground.velocityX=0;
  
}

if(monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach()
  
}



    
  if(keyDown("space")&& monkey.y>150 ){
    monkey.velocityY=-12;
   
  }
   score = score + Math.round(frameCount/60)
  monkey.velocityY= monkey.velocityY+ 1;
  
}
 
  