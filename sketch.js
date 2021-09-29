var ball1,ball2



function setup() 
{
  createCanvas(400, 400);

  ball1=new Ball(147,135,19,5,0)
  ball2=new Ball(147,135,19,0,-0.1)
}

function draw() 
{
  background(220);
ball1.show();

ball1.move();

ball2.show()

ball2.superman_flies()
}

