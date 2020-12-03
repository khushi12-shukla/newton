class rope{
    constructor(body1, body2,x){
        this.x=x;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x}
        }
         this.rope = Constraint.create(options);
         World.add(world, this.rope);
    }

    display(){
        var pointB = this.rope.bodyB.position;
        var pointA =this.rope.bodyA.position;
        strokeWeight(4);
        line(pointB.x, 100, pointA.x, pointA.y);
    }
    
}