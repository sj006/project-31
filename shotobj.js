class Bird {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          friction:1,
         restitution:1,
         dencity:2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.image = loadImage("polygon.png")
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
    }
  };
