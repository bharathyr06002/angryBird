class BaseClass{
    constructor(x, y, SCREEN_WIDTH, SCREEN_HEIGHT, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, SCREEN_WIDTH, SCREEN_HEIGHT, options);
        
        this.SCREEN_WIDTH = SCREEN_WIDTH;
        this.SCREEN_HEIGHT = SCREEN_HEIGHT;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
        pop();
      }
}
