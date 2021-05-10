const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg

function preload(){
    bgImage = loadImage("forest-stonesBG.jpg")
}

function setup() {
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

   bg = createSprite(500,150,2000,500)
   bg.addImage(bgImage)
   bg.scale=2
   bg.velocityX = -3
   bg.x = bg.width/2
}

function draw() {
    background(255)

    Engine.update(engine);
   if(bg.x<0){
    bg.x = bg.width/2

   }
   drawSprites();
}

  

