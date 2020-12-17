PLAY=1;
END=0;
gameState= PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,restartImage;
var score
var backgroundImage,backgroundpic,invisibleGround;
var banana,rock,food;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImage=loadImage("background0.png");
restartImage=loadImage("restart.png");
}



function setup() {
createCanvas(600,600)
  
monkey = createSprite(100,345,20,50);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.19;
 
 
 backgroundpic = createSprite(0,0,600,600);
 backgroundpic.addImage("background",backgroundImage);
 backgroundpic.x = backgroundpic.width /2;
 backgroundpic.scale= 2.5; 

   backgroundpic.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;

  
  invisibleGround = createSprite(200,430,400,10);
  invisibleGround.visible = false;
 
  
  obstaclesGroup = createGroup();
  foodGroup = createGroup();


  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false;
  
  survivalTime=0;
  
}


function draw() {
background("white");

  
   
 if (gameState === PLAY){
   
   
 backgroundpic.velocityX = -2;
  
if (backgroundpic.x < 120) {
  backgroundpic.x = backgroundpic.width / 2;
}
 
  if(keyDown("space")) {
     
    monkey.velocityY = -12;
  }     
  monkey.velocityY = monkey.velocityY + 0.7;
    
  
  monkey.velocitY=6;
  
  monkey.collide(invisibleGround);

  
  banana();
  Rock();
   
   
     
    if(obstaclesGroup.isTouching(monkey)){
        gameState = END;
      
  } 
 }
 
  else if (gameState === END) {
     
     
      backgroundpic.velocityX = 0;
      
    monkey.velocityY = 0
    
    foodGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     foodGroup.setVelocityXEach(0);
   } 
 
    
  drawSprites();  

 text("SURVIVAL TIME: "+survivalTime,100,50);
  stroke=("black");
   textSize=20;
   survivalTime=Math.ceil(frameCount/frameRate());
  
}

function banana(){
  if (frameCount % 120 === 0){
    var Banana = createSprite(600,120,40,10);
    Banana.Y= Math.round(random(80,120));
    Banana.addImage(bananaImage);
    Banana.scale = 0.1
    Banana.velocityX = -3;
    
     //assign lifetime to the variable
    Banana.lifetime = 200;
    
    
    
    //add each cloud to the group
    foodGroup.add(Banana);
  }
}
 

function Rock(){
  
  if (frameCount % 350 === 0){
 var obstacle = createSprite(500,385,20,20); 
obstacle.addAnimation("moving",obstacleImage); 
 obstacle.velocityX=-7;
obstacle.setLifetime=300; 
  obstacle.scale=0.2;
    obstaclesGroup.add(obstacle) 
  
  }
  
  
  
}
  
  
  
  

    


