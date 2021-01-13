const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
 //  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;

   //platform
    ground = new Ground(530,350,300,25);
    ground2 = new Ground(530,600,1600,25);
    ground3 = new Ground(930,300,200,25);
    //tower1
    //lv 1
    box1 = new Box1(530,200,30,40);
    //lv 2
    box2 = new Box1(500,240,30,40);
    box3 = new Box1(530,240,30,40);
    box4 = new Box1(560,240,30,40);
    //lv3
    box5 = new Box1(470,280,30,40);
    box6 = new Box1(500,280,30,40);
    box7 = new Box1(530,280,30,40);
    box8 = new Box1(560,280,30,40);
    box9 = new Box1(590,280,30,40);
    //lv4
    box10= new Box1(440,320,30,40);
    box11= new Box1(470,320,30,40);
    box12= new Box1(500,320,30,40);
    box13= new Box1(530,320,30,40);
    box14= new Box1(560,320,30,40);
    box15= new Box1(590,320,30,40);
    box16= new Box1(620,320,30,40);
    //tower2 
    //lv 1
    box17 = new Box1(930,200,30,40);
    //lv 2
    box18 = new Box1(900,240,30,40);
    box19 = new Box1(930,240,30,40);
    box20 = new Box1(960,240,30,40);
    //lv 3
    box21 = new Box1(870,280,30,40);
    box22 = new Box1(900,280,30,40);
    box23 = new Box1(930,280,30,40);
    box24 = new Box1(960,280,30,40);
    box25 = new Box1(990,280,30,40);
   
   bird = new Bird(200,150,20,20);

   
    slingshot = new Slingshot(bird.body,{x:200, y:250});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4)
    push();
    fill("orange");
    box1.display();
    pop();
   
   
   ground.display();
   push();
   fill("green");
    box2.display();
    box3.display();
    box4.display();
    pop();
    push();
    fill("pink");
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    pop();
    push();
    fill("lightblue");
    box10.display();
    box12.display();
    box11.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    
    pop();
    push();
    fill("lightgreen");
   box17.display();
    pop();
    push();
    fill("red");
     box18.display();
    box19.display();
    box20.display();
    pop();
    push();
    fill("yellow");
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    pop();
    ground3.display();
   bird.display();
  ground2.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
        Matter.Body.setPosition(bird.body, {x: 200 , y: 150});
       // gameState = "onsling";
    }
}
