const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1;
var dustbin1;
var dustbin2,dustbin3,ground;


function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,370,1000,20)

	paper1 = new Paper(50,200,20);

	dustbin1 = new Dustbin(702,295,20,125);

	dustbin2 = new Dustbin(812,345,202.5,20);

	dustbin3 = new Dustbin(920,295,20,125);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);

  ground.display();

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,({x : 75, y : -75}))
	} 
  }
