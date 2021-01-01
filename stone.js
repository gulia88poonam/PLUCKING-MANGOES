class stone{
    constructor(x,y){
       var options = {
           isStatic: false,
           restitution: 0,
           friction: 1,
           density: 1.2
       }
       this.body = Bodies.circle(x,y,40,options);
       
       this.r = 40;
       this.image = loadImage("images/stone.png");
       World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;

     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image,0,0,this.r,this.r);
     pop();
    }
}