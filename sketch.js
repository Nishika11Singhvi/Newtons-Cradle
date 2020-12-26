const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() 
{
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

  bob1=new Bob(300,350,50);
  bob2=new Bob(350,350,50);
  bob3=new Bob(400,350,50);
  bob4=new Bob(450,350,50);
  bob5=new Bob(500,350,50);

  ground1 = new Ground(450,50,300,20);

  sling1= new Suspender(bob1.body,ground1.body,-50*2,0);
  sling2= new Suspender(bob2.body,ground1.body,-25*2,0);
  sling3= new Suspender(bob3.body,ground1.body,-0*2,0);
  sling4= new Suspender(bob4.body,ground1.body,25*2,0);
  sling5= new Suspender(bob5.body,ground1.body,50*2,0);

	Engine.run(engine)
}

function draw() 
{
  background(0);
  rectMode(CENTER);

  Engine.update(engine);

  textSize(20);
  fill("white");
  textFont("bembo");
  text("Press and Drag The Bob",30,50)
  text("To See The Pendulum",40,77)
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground1.display();

  drawSprites();
}

function mouseDragged()
{
      var hide = createSprite(30,60,400,100)
      hide.shapeColor = "black";
      Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}




