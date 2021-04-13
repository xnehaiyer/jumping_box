var canvas;
var music;
var surface1, surface2, surface3, surface4, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(75, 550, 150, 50);
    surface1.shapeColor = "pink";

    surface2 = createSprite(275, 550, 150, 50);
    surface2.shapeColor = "green";

    surface3 = createSprite(475, 550, 150, 50);
    surface3.shapeColor = "blue";

    surface4 = createSprite(675, 550, 150, 50);
    surface4.shapeColor = "red";


    //create box sprite and give velocity
    box = createSprite(random(20,750), 200, 50, 50);
    box.shapeColor = "white";
    box.velocityX = +2;
    box.velocityY = +3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    //add condition to check if box touching surface and make it box
    drawSprites();
    bounceOff(box,surface1);
    bounceOff(box,surface2);
    bounceOff(box,surface3);
    bounceOff(box,surface4);
}
function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }
  
  }
    //dear niddhi, 
    //I used the bounce off function that we used in the lesson but it is
    //making the code not work. I checked console.log and no errors came up
    //so I am not sure what is wrong witht his code. Could you please check 
    //and let me know what I am doing wrong
    //Kind regards, Neha

