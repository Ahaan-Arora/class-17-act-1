class Ball
  {
    constructor(x,y,r,vx,vy)
    {
      this.x =x;
      this.y =y;
      this.r =r;
       
      this.vx = vx
      this.vy = vy
    }
    
    show()
    {
      circle(this.x,this.y,this.r)
    }
    
    move()
    {
      this.x = this.x+this.vx;
    }
    superman_flies()
    {

      this.y=this.y+this.vy
    }
  }

  
