class woodenPlate extends BaseClass{
  constructor(x,y,SCREEN_HEIGHT,angle){
    super(x,y,20,SCREEN_HEIGHT,angle);
    this.body.friction = 2;
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
 
}
