
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle = 60;
var angle1 = 120;
var angle2 = 30;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var ball_options = {
		restituition: 0.95,
		frictionAir: 0.01
	}

	var ground_options = {
		isStatic: true
	}
	var block_options = {
		isStatic: true
	}
	var rotator_options = {
		isStatic: true
	}
	

	ground = Bodies.rectangle(400, 700, 1000, 20, ground_options);
	World.add(world, ground);
	block = Bodies.rectangle(200, 350, 200, 20, block_options);
	World.add(world, block);
	block1 = Bodies.rectangle(600, 350, 200, 20, block_options);
	World.add(world, block1);
	rotator = Bodies.rectangle(400, 350, 20, 200, rotator_options);
	World.add(world, rotator);
	rotator1 = Bodies.rectangle(400, 350, 20, 200, rotator_options);
	World.add(world, rotator1);
	rotator2 = Bodies.rectangle(400, 350, 20, 200, rotator_options);
	World.add(world, rotator2);



	ball = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball);
  ball1 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball1);
  ball2 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(400,10,20,ball_options);
  World.add(world,ball3);

  rectMode(CENTER);
  ellipseMode(RADIUS);


	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background(rgb(128, 255, 0));

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  rect(ground.position.x,ground.position.y,1000,20); 
  rect(block.position.x,block.position.y,200,20); 
  rect(block1.position.x,block1.position.y,200,20); 


  Matter.Body.rotate(rotator, angle);
  push();
  translate(rotator.position.x, rotator.position.y);
  rotate(angle);
  rect(0, 0, 20, 200);
  pop();
  Matter.Body.rotate(rotator1, angle);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0, 0, 20, 200);
  pop();
  Matter.Body.rotate(rotator2, angle);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0, 0, 20, 200);
  pop();

  angle += 50;
  angle1 += 50;
  angle2 += 50;
  
  drawSprites();
 
}



