const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops, world, engine, umbrella, thunderbolt
var t1, t2, t3, t4;
var maxDrops = 100;
function preload(){
   t1 = loadImage("thunderbolt/1.png")
   t2 = loadImage("thunderbolt/2.png")
   t3 = loadImage("thunderbolt/3.png")
   t4 = loadImage("thunderbolt/4.png")

    
}

function setup(){
    createCanvas(500,900)
    engine = Engine.create();
    world = engine.world;
    drops = []
    umbrella = new Umbrella(250, 575, 300)
    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drop(random(0,500), random(0, 500)))
    }
    thunderbolt = createSprite(50,155,20,20)

}

function draw(){
    background("black")
    drawSprites()
    Engine.update(engine);
    umbrella.display()
    for(var i = 0; i<maxDrops; i++){
        drops[i].display()
    }
    thunderbolt.scale = 0.5
    spawnthunderbolt()
}   
function spawnthunderbolt(){
    if(frameCount % 60 === 0){
    thunderbolt = createSprite(250,155,20,20)
    var rand = Math.round(random(1, 4))
    switch(rand){
        case 1: thunderbolt.addImage(t1)
        break;
        case 2: thunderbolt.addImage(t2)
        break;
        case 3: thunderbolt.addImage(t3)
        break;
        case 4: thunderbolt.addImage(t4)
    }
}
    }
