const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particle =[]
var plink=[]
var divisions=[] 
var divisionHeight = 300



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground (width/2,height,width,20)
   for(var k =0;k<=width;k=k+80){
  divisions.push (new Divisions(k,height=divisionHeight/2,10,divisionHeight))

   }
   for (var j = 50;j <=width; j=j+50)
{
plink.push(new Plink(j,75))

}
for (var j =75; j <=width-10 ; j=j+50)
{

  plink.push(new Plink(j,170))

}
for (var j = 50;j <=width; j=j+50)
{
plink.push(new Plink(j,265))

}
for (var j =75; j <=width-10 ; j=j+50)
{

  plink.push(new Plink(j,360))
  
}



   
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
 ground.display();


 for (var l=0; l< plink.length;l++){

  plink[l].display ()
}

if (frameCount%60===0){

  particle.push(new Particle(random(width/2-10,width/2+10),10,10))
}

for (var j=0; j< particle.length;j++){

  particle[j].display ()
}

for (var k=0; k< divisions.length;k++){

  divisions[k].display ()
}






}