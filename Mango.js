class Mango{
    constructor(x,y){
      var options = {
          isStatic: true,
          restitution:0,
          friction: 1
      }
this.body = Bodies.circle(x,y,40,options);
this.r = 40;
this.im = loadImage("images/mango.png");
World.add(world,this.body);

    }
    display(){
var pos = this.body.position;
var angle = this.body.angle;
push();

translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.im,0,0,this.r,this.r);

pop();
    }
}