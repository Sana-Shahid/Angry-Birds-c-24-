const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1, log2, bird1
var log1, box3, box4, box2

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig (810,350);
    log1 = new Log (810,260,300,PI/2);
    pig2 = new Pig (810,200);
    box3 = new Box (920,200,70,70);
    box4 = new Box (700,200,70,70);
    log2 = new Log (810,160,300,PI/2);
    box5 = new Box (810,100,70,70);
    log3 = new Log (760,120,150,PI/7);
    log4 = new Log (870,120,150,-PI/7)
    bird1 = new bird (50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}