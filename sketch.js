
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  crumpledPaper = new Paper(150,500,15);
  ground = new Ground(450,690,900,10);
  wall1 = new Wall(650, 640, 20, 100);
  wall2 = new Wall(750,640, 20,100);
  dustbin = new Dustbin(700, 632, 200, 5);
  
  }


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
 crumpledPaper.display();
 ground.display();
 wall1.display();
 wall2.display();
 dustbin.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:40, y:-29})
		crumpledPaper.velocityY=-5
	}
}


