class Roof{
    //since there is only one roof, there's no need of passing arguments
    constructor(){
        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(400,100,300,10,options);
        this.width = 300;
        this.height = 10;
          World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("pink")
        rect(pos.x,pos.y,this.width,this.height);
    }
}