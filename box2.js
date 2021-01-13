class Box3 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction:1,
         restitution:1.1,
         dencity:4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
       // var angle = this.body.angle;
       // translate(this.body.position.x, this.body.position.y);
      //  rotate(angle);
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
