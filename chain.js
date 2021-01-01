class chain{
    constructor(bodyA,pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
         stiffness: 0.01,
         length : 10
      }
this.rope = Constraint.create(options);
this.pointB = pointB;
World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(bodyA){
        this.rope.bodyA = bodyA;
    }
    display(){
        if(this.rope.bodyA){
            
var pointA = this.rope.bodyA.position;
var pointB = this.pointB;

line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}