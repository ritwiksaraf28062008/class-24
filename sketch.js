const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    ground = new Ground(600,height,1200,20)
    log1 = new Log(800,250,300,PI/2);
    pig1 = new Pig(800,320);
    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);
    log2 = new Log(800,200,300,PI/2);
    pig2 = new Pig(800,220);
    box5 = new Box(800,160,70,70);
    log3 = new Log(750,120,150,PI/7);
    log4 = new Log(850,120,150,-PI/7);
    bird1 = new Bird(200,100);

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
    log1.display();
    pig1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    box5.display();
    bird1.display();

}