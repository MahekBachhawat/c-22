const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies;

var canvas
function setup(){
  canvas=createCanvas(400,400);
  engine=Engine.create()
  world=engine.world

  var options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,380,400,10,options)
  World.add(world,ground)

  var options2={
    restitution:1
  }

  ball=Bodies.circle(200,100,10,options2)
  World.add(world,ball) 

}
function draw(){
  background(0);
  Engine.update(engine)

  rectMode(CENTER)
  fill ("red")
  rect(ground.position.x,ground.position.y,400,10)
  
  fill ("blue")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10)
  
  
  
}