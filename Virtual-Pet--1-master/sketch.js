dog, happyDog, database, foodS, foodStock //Create variables here

function preload()
{
	//load images here
  this.Image = loadImage("sprites/Dog.png")
  this.Image = loadImage("sprites/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  var dog = createSprite;
  this.Image = addImage("sprites/Dog.png")

  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here

}



