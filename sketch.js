var ground, dustbin1, paper;
var world, engine,launcher ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	paper=new Paper(160,500,30);
	dustbin1=new Dustbin(550,620,300,100);
	ground=new Ground(400,680,800,10);

	launcher = new Launcher(paper.body,{x:200, y: 500});



	//Create a Ground
	//ground = Bodies.rectangle(400, 680, 800, 10 , {isStatic:true} );
	//ground.shapeColor="brown"; 
	//World.add(world, ground);
	 


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  paper.display();
  dustbin1.display();
  ground.display();
  rectMode(CENTER);
  //fill("brown");
 // rect(ground.position.x, ground.position.y, ground.width, ground.height);
  
  //drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition (paper.body, {x:mouseX, y:mouseY});
}

function mouseReleased (){
    launcher.fly();
}

