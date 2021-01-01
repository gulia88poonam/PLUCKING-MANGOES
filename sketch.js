
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine,world;
var tree1;
var ground;
var stoneObj;
var boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var sling;
function preload()
{
  boyImg = loadImage("images/boy.png");
  tree1 = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    // tree1 = new tree(800,400,300,600);

	 ground= new Ground(600,700,1200,30);

	stoneObj = new stone(240,560,50,50);
	
	mango1 = new Mango(850,380);
	mango2 = new Mango(830,250);
	mango3 = new Mango(750,300);
	mango4 = new Mango(780,370);
  mango5 = new Mango(860,300);
  mango6 = new Mango(850,270);
  mango7 = new Mango(890,300);
  mango8 = new Mango(850,270);
  sling = new chain(stoneObj.body,{x:240,y: 560});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background("powderblue");
  image(boyImg,300,620,200,250);
  image(tree1,800,400,300,600);
  //tree1.display();
  ground.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  sling.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  drawSprites();
 
 
}

function mouseDragged (){
  Body.setPosition(stoneObj.body,{x:mouseX,y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function detectollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance<=lmango.r+lstone.r){
  Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
  if(keyCode === 32){
    Body.setPosition(stoneObj.body,{x:240,y:560});
    sling.attach(stoneObj.body);
  }
}
