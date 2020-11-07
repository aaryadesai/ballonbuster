var background, backgroundimage;
var redballonsGroup,redballons, redballonimage;
var greenballonsGroup,greenballons, greenballonimage;
var blueballonsGroup,blueballons, blueballonimage;
var pinkballonsGroup,pinkballons, pinkballonimage;
var bow, bowimage;
var arrowsGroup,arrows, arrowimage;
var score;

function preload() {

  backgroundimage = loadImage("background0.png")
  redballonimage = loadImage("red_balloon0.png")
  greenballonimage = loadImage("green_balloon0.png")
  blueballonimage = loadImage("blue_balloon0.png")
  pinkballonimage = loadImage("pink_balloon0.png")
  bowimage = loadImage("bow0.png")
  arrowimage = loadImage("arrow0.png")

}

function setup() {
  createCanvas(600, 600);


  background = createSprite(20, 20, 20, 20)
  background.addImage(backgroundimage)
  background.scale = 3.0
  background.velocityX = 5
  
   
  bow = createSprite(580, 220, 20, 20)
  bow.addImage(bowimage)
  bow.scale = 1.0
 
  //obstaclesGroup = createGroup();
  redballonsGroup =  createGroup();
  blueballonsGroup =  createGroup();
  greenballonsGroup = createGroup();
  pinkballonsGroup = createGroup();
  arrowsGroup = createGroup();
  
  score = 0
}

function draw() {

  if (background.x > 600) {
    background.x = background.width / 80

  }
  
  bow.y = mouseY;
 
  if (keyWentDown("space")) {
      createarrow();
      arrow.velocityX = -4
      arrow.y = bow.y

  }
  
  if(arrowsGroup.isTouching(redballonsGroup)){
   redballonsGroup.destoryEach();
    arrowsGroup.destoryEach();
    score = score+1
     }
  
  if(arrowsGroup.isTouching(blueballonsGroup)){
   blueballonsGroup.destoryEach();
    arrowsGroup.destoryEach();
    score = score+1
     }
  
  if(arrowsGroup.isTouching(greenballonsGroup)){
   greenballonsGroup.destoryEach();
    arrowsGroup.destoryEach();
    score = score+1
     }
  
  if(arrowsGroup.isTouching(pinkballonsGroup)){
   pinkballonsGroup.destoryEach();
    arrowsGroup.destoryEach();
    score = score+1
     }
  
  createarrow();
  spawnballons();
  drawSprites();
 
  text("Score: " + score, 500, 50);
  textSize = 20

}
//function spawnBallon(){
//if(World.frameCout % 80 === 0){ 
  //var spawnBallon = Math.round(random(1,4));
  //  if (spawnBallon == 1){
    //    redballons();
   //   }else if (spawnBallon == 2){
    //    greenballons();
    //    }else if (spawnBallon == 3){
   //     blueballons();
   //    }else if (spawnBallon == 4){
    //   pinkballons();
     //   }
 // }
//}


function createarrow() {
 arrow = createSprite(636, 220, 20, 20);
  arrow.addImage(arrowimage);
  arrow.scale = 0.3;
  arrow.lifetime = 600
  arrowsGroup.add(arrow)
}
function spawnballons() {
  if (frameCount % 80 === 0) {
    redballons = createSprite(0, random(100, 550), 20, 20);
    redballons.velocityX = 5;
    redballons.scale = 0.1;
    redballons.lifetime = 120;
    
    
    greenballons = createSprite(0, random(100, 550), 20, 20);
    greenballons.velocityX = 5;
    greenballons.scale = 0.1;
    greenballons.lifetime = 120;
    
    blueballons = createSprite(0, random(100, 550), 20, 20);
    blueballons.velocityX = 5;
    blueballons.scale = 0.1;
    blueballons.lifetime = 120;
    
    pinkballons = createSprite(0, random(100, 550), 20, 20);
    pinkballons.velocityX = 5;
    pinkballons.scale = 0.1;
    pinkballons.lifetime = 120;

    
    var rand = Math.round(random(1, 4));
    switch (rand) {

      case 1:
        redballons.addImage(redballonimage);
         redballonimage.scale = 1.4
         break;

      case 2:
        greenballons.addImage(greenballonimage);
        break;

      case 3:
        blueballons.addImage(blueballonimage);
        break;

      case 4:
        pinkballons.addImage(pinkballonimage);
        pinkballonimage.scale = 1.5
        break;
      default: break;

    }
  }

}
