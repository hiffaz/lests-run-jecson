var path,pathImg,jake,jake_Running,coin,coinImg,path2,pathImg2
function preload(){
//jake loadAnimation in canvas 
  jake_Running=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
 coinImg=loadImage("coin.png");
 //pathImg loadAnimation 
  pathImg=loadImage("path.png")  
 //path2 loadAnimation
 pathImg2=loadImage("path.png")
}

function setup(){
  //create canvas 
  createCanvas(700,600);
  //create path
  path2=createSprite(550,550);
  path2.addImage(pathImg);
  path2.velocityY =4;
  path2.scale=1.2;  
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY =4;
  path.scale=1.2;
  //create jake 
jake=createSprite(200,400,20,20);
//jake addAnimation 
jake.addAnimation("Running",jake_Running)
}
function draw() {
  background(0);
  if(path2.y > 400){
    path2.y = height/2;
    }
  if(path.y > 400){
    path.y = height/2;
    }
drawSprites()
}

