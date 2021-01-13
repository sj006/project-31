class Box1 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction:1,
         restitution:1.2,
         dencity:4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity=255;
      World.add(world, this.body);
    }
    display(){
       // var angle = this.body.angle;
       // translate(this.body.position.x, this.body.position.y);
      //  rotate(angle);
      var pos =this.body.position;
     
    //  rect(pos.x, pos.y, this.width, this.height);
      if(this.body.speed < 3){
        rectMode(CENTER);
    
        rect(pos.x, pos.y, this.width, this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
        // image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      //  rect(pos.x, pos.y, this.width, this.height);
    
    
         pop();
       }  
    }
  };
