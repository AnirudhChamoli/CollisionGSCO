var Car , Wall;
var Speed , Weight;

function setup ()
{
  createCanvas (1600,400)
  Car = createSprite (50,200,50,50);
  Wall = createSprite (1500,200,60,height/2);

  Speed = random(55,90);
  Weight = random(400,1500);

  Car.velocityX = Speed;
  Car.shapeColor=color(255,255,255);
}

function draw ()
{
  background (0,0,0);
  if (Wall.x-Car.x < (Wall.width+Car.width)/2){
    Car.velocityX = 0;
    var Deformation = 0.5 * Weight * Speed * Speed / 22500;
    if (Deformation < 100){
      Car.shapeColor=color(0,255,0);
    }
    if (Deformation > 180)
    {
      Car.shapeColor=color(255,0,0);
    }
    if (Deformation < 180 && Deformation > 100)
    {
      Car.shapeColor=color(230,230,0);
    }
  }
  drawSprites();
}