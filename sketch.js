const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution:0.8
  }
  object = Bodies.circle(200,100,20,options);
  World.add(world,object);

  var groundOptions = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,10,groundOptions);
  World.add(world,ground);
  
  console.log(object);
  
}

function draw() {
  Engine.update(engine);
  background("black"); 
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  drawSprites();
}