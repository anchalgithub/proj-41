const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunderbolt1, thunderbolt2, thunderbolt3,thunderbolt4;
var maxDrops =100;


var drops = [];
var engine,world;
var rand;
var thunderCreatedFrame=0;

function preload(){
 thunderbolt1= loadImage("images/1.png");
 thunderbolt2= loadImage("images/2.png");
 thunderbolt3= loadImage("images/3.png");
 thunderbolt4= loadImage("images/4.png");

 walking1 = loadImage("images/walking_1.png");
 walking2 = loadImage("images/walking_2.png");
 walking3 = loadImage("images/walking_3.png");
 walking4 = loadImage("images/walking_4.png");
 walking5 = loadImage("images/walking_5.png");
 walking6 = loadImage("images/walking_6.png");
 walking7 = loadImage("images/walking_7.png");
 walking8 = loadImage("images/walking_8.png");

}

function setup(){
engine = Engine.create();
world = engine.world;

canvas = createCanvas(displayWidth-20,displayHeight-30);

umbrella = new Umbrella (200,500);

for (var1=0; i<maxDrops;i++){
 drops.push (new createDrop(random(0,400), random(0,400)));
 }

}


function draw(){
    
umbrella.display();

maxDrops.display ();

rand = Math.round(random(1,4));
if(frameCount%80===0){

switch (animation){
case 1: thunderbolt1.addImage(thunderbolt1);
        break;
case 2: thunderbolt2.addImage(thunderbolt2);
        break;
case 3: thunderbolt3.addImage(thunderbolt3);    
        break;
case 4: thunderbolt4.addImage(thunderbolt4);
        break;
}
thunder.scale=random(0.3,0.6);
}

if(thunderCreatedFrame+10===frameCount&&thunder){
thunder.destroy();
}

for(var i=0;i<maxDrops;i++){
drops[i].showDrop();
drops[i].update();
}

drawSprites ();
}   

