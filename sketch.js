const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bobDiameter,Roof,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

bobDiameter=100;
	engine = Engine.create();
  world = engine.world;

bob1 = new bob(300,350,50);
bob2 = new bob(350,350,50);
bob3 = new bob(400,350,50);
bob4 = new bob(450,350,50);
bob5 = new bob(500,350,50);

Roof = new roof(400,100,300,30);

rope1 = new rope(bob1.body,Roof.body,500);
rope2 = new rope(bob2.body,Roof.body,500);
rope3 = new rope(bob3.body,Roof.body,500);
rope4 = new rope(bob4.body,Roof.body,500);
rope5 = new rope(bob5.body,Roof.body,500);
//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  Roof.display();

  drawSprites();
 
}