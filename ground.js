class groundClass {
    constructor(x,y,SCREEN_WIDTH,SCREEN_HEIGHT , draw) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,SCREEN_WIDTH,SCREEN_HEIGHT,options);
      this.SCREEN_WIDTH = SCREEN_WIDTH;
      this.SCREEN_HEIGHT = SCREEN_HEIGHT;
      this.draw = draw;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("saddlebrown");
      rectMode(CENTER);
      if (this.draw==true){
      rect(pos.x, pos.y, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
      //rect(SCREEN_WIDTH/2,SCREEN_HEIGHT - 25 ,SCREEN_WIDTH,50);
    }
  }
  }
