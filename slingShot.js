class slingShotClass{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1 = loadImage('sprites/sling1.png');
        this.image2 = loadImage('sprites/sling2.png');
        this.image3 = loadImage('sprites/sling3.png');
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    voar(){
        this.slingShot.bodyA = null;
    }

    ligar(){
      this.slingShot.bodyA = this.bodyA;
    }

    display(){
        image(this.image1,200,SCREEN_HEIGHT - 345);
        image(this.image2,172,SCREEN_HEIGHT - 340);
        if (this.slingShot.bodyA) {
          var pointA = this.slingShot.bodyA.position;
          var pointB = this.pointB;
          push();
          stroke(48,22,8);
          if (pointA.x < 220){
            strokeWeight(15);
            if(pointA.x < 170){
              strokeWeight(10);
              if(pointA.x < 100){
                strokeWeight(7);
              }
            }
            line(pointA.x-20, pointA.y, pointB.x-15, pointB.y+6);
            line(pointA.x-20, pointA.y, pointB.x+25, pointB.y+6);
            image(this.image3,pointA.x-30, pointA.y-10,15,30);
          } else {
            strokeWeight(10);
              if(pointA.x > 280){
                strokeWeight(7);
              }
            line(pointA.x+28, pointA.y, pointB.x-15, pointB.y+6);
            line(pointA.x+28, pointA.y, pointB.x+25, pointB.y+6);
            image(this.image3,pointA.x+25, pointA.y-10,15,30);
          }
          
          pop();
        }
    }
    
}
