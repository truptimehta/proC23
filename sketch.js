const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var ground;

function setup(){
    var canvas = createCanvas(400,400);
    colorMode(HSB);

   
    engine = Engine.create();
    world = engine.world;

    box2 = new Box(345,298,50,150)
    box3 = new Box(55,298,50,150)
    box4 = new Box(200,272,80,200)
    box5 = new Box(120,310,80,125)
    box6 = new Box(280,310,80,125)
    box7 = new Box(200,152,40,40)
    box8 = new Box(346,202,30,40)
    box9 = new Box(54,202,30,40)
    ground = new Ground(200,390,400,35)
  
    
}


function draw(){
    background(0,0,35,25); 
    colorMode(RGB);
    
 
    
  
    
    var galaxy = { 
    locationX : random(width),
    locationY : random(height),
    size : random(1,6)
  }
    ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
    ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
  
  
  

 
    Engine.update(engine);
  
    stroke('#222222');
    strokeWeight(4);
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    fill("red")
    
    rect(55, 250, 20, 20);
    rect(55,285, 20, 20);
    rect(55,325, 20, 20);
    rect(350, 250, 20, 20);
    rect(350,285, 20, 20);
    rect(350,325, 20, 20);
    ellipse(200,380,35,110)
    fill("red")
    triangle( 30, 185, 52, 130, 76, 185);
    triangle( 325, 185, 347, 130, 371, 185);
    triangle( 172, 135, 200, 80, 228, 135);  
      
    ground.display()
     
   
    fill("white")
    noStroke();
    ellipse(30,40,60,60)




}

