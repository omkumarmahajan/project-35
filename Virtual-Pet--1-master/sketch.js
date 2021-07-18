//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload()
{
	//load images here

  dogImage = loadImage("Dog.png")
  happyDog = loadImage("happydog.png")

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(200,300,50,50) 
  dog.addImage(dogImage)
  dog.scale = 0.5;


  foodStock=database.ref('foodS/position');
  foodStock.on("value",readStock);

}


function draw() {  
   background(46,139,87)

   if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
     dog.addImage(happyDog)
   }



  drawSprites();
  //add styles here

}
 function readStock(data){
    foodS = data.val();
 }

function writeStock(x){
   database.ref('/').update({

    Food:x
   })

}
