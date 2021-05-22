class Rope {
    //xOffset in the constructor is introduced to have distance between the constraint points in the roof and not start from the same point
constructor(bodyA,bodyB,xOffset){
    var options ={
        bodyA:bodyA,
        bodyB:bodyB,
        length:-500,
        pointB:{x:xOffset,y:0}      //Since there will not be any difference in the y position of the constraint in the roof, yOffset is taken as 0
    }

    this.rope=Constraint.create(options);
    this.xOffset = xOffset;
    World.add(world,this.rope);
}

display(){
    var pointA = this.rope.bodyA.position;     //(pointA=bob)
    var pointB = this.rope.bodyB.position;     //(pointB=roof)
    stroke("red");
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x + this.xOffset,pointB.y)
}
}