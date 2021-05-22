class Bob{
//since radius of all the objects are same, x and y are taken as arguments
constructor(x,y){
  var options = {
    restitution:1,
    friction:0.3,
    density:0.8
  }

  this.body = Bodies.circle(x,y,25,options);
  World.add(world,this.body);
}

display(){
  var pos = this.body.position;
  fill("aqua");
  ellipseMode(RADIUS);
  ellipse(pos.x,pos.y,25,25) //25,25 is the diameter of the ellipse
}
}