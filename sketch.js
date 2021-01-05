
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;


function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(450,100,400,20);

	bobObject1=new Bob(200,500,20);
	bobObject2=new Bob(270,500,20);
	bobObject3 = new Bob(340,500,20)
	bobObject4 = new Bob(410,500,20);	
	bobObject5=new Bob(480,500,20);

rope1 = new Rope(bobObject1.body,roofObject.body,-140,0)
rope2 = new Rope(bobObject2.body,roofObject.body,-70,0)
rope3 = new Rope(bobObject3.body,roofObject.body,0,0)
rope4 = new Rope(bobObject4.body,roofObject.body,70,0)
rope5 = new Rope(bobObject5.body,roofObject.body,140,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(128);
  
  roofObject.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  drawSprites();
 
}


function keyPressed(){

if(keyCode === UP_ARROW ){
	Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:150,y:- 150});
	
}


}




