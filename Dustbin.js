class Dustbin {
    constructor(x,y,width,height){
 var options={
          isStatic:false
        
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;
        World.add(world, this.body);
    }
    display(){
        push(); 
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        fill("blue");
        pop();
    }
}