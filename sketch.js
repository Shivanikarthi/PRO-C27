 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

 var engine, world;

 var roof;
 var bob1,bob2,bob3,bob4,bob5;
 var rope1,rope2,rope3,rope4,rope5;

 function preload(){

 }

 function setup(){
     createCanvas(800,700);

     //create physics engine
    engine = Engine.create();

    //create the world for physics Engine
    world = engine.world;

    //Engine.run and Engine.update are the same
    Engine.run(engine);

    //create roof object
    roof = new Roof();

    //create the five bob objects
    bob1 = new Bob(300,300);
    bob2 = new Bob(350,300);
    bob3 = new Bob(400,300);
    bob4 = new Bob(450,300);
    bob5 = new Bob(500,300);

    //creating ropes for constraining the roof and the bobs
    rope1 = new Rope(bob1.body,roof.body,-100);     //The xOffset of the rope is 100 pixels to the left of the center of the bob3
    rope2 = new Rope(bob2.body,roof.body,-50);      //The xOffset of the rope is 50 pixels to the left of the center of the bob3
    rope3 = new Rope(bob3.body,roof.body,0);        //Since bob3 is the the center one, its xOffset remains in the center of the roof
    rope4 = new Rope(bob4.body,roof.body,50);
    rope5 = new Rope(bob5.body,roof.body,100);
    
 }

 function draw(){
     background(0);

     roof.display();
     bob1.display();
     bob2.display();
     bob3.display();
     bob4.display();
     bob5.display();

     rope1.display();
     rope2.display();
     rope3.display();
     rope4.display();
     rope5.display();
 }

 //Press up arrow to apply force to the bob using function keyPressed()
 function keyPressed(){
     if(keyCode === UP_ARROW){
         Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
         // Matter.Body.applyForce(bodyName,body'sPosition,{direction of the force})

     }
 }