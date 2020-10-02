
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground1;
var log1,log2,log3;
var dust;
function preload()
{
	dust = loadImage("Trash-Can-PNG-Clipart.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(200,450,40);
    log1=new Box(400, 640, 20, 20);
	ground1=new Ground(400,690,1500,10);
	
    block1 = new Dustbin(20, 200, 50, 200);

    var options = {
      isStatic: true,
      
    };

    var CenterBox = createSprite(770, 600, 200, 20);
    CenterBox.shapeColor = color(255, 0, 0);
    CenterBox.addImage(dust);
    CenterBox.scale = 0.7;
    
    strokeWeight(3);
    CenterBody = Bodies.rectangle(790, 600, 200, 20, options);
    World.add(world, CenterBody);
  
    var RightBox = createSprite(890, 550, 20, 100);
    RightBox.shapeColor = color(255, 0, 0);
    RightBox.visible = false;

  
    strokeWeight(3);
    RightBody = Bodies.rectangle(890, 550, 20, 100, options);
    World.add(world, RightBody);
    LeftBox = createSprite(690, 600, 20, 100);
    LeftBox.shapeColor = color(255, 0, 0);
    LeftBox.visible = false;
  
    strokeWeight(3);
    LeftBody = Bodies.rectangle(690, 550, 20, 100, options);
    World.add(world, LeftBody);

	Engine.run(engine);
  
}


function draw() {

	//engine.update(Engine)
  rectMode(CENTER);
  background("LightBlue");
  paper.display();
 log1.display();
ground1.display();
block1.display();
  drawSprites();
 
 
}

function keyPressed(){
if (keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});


}



}

