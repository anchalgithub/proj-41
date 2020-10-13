class Umbrella {
    constructor(x,y,){
    var options = {
    isStatic : true,
    }
    
    this.image = addImage (walking1,walking2,walking3,walking4, walking5,walking6,walking7,walking8 );
    this.r=r;
    this.body = Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
    
}
    
    
    
    display(){
    var angle = this.angle.angle;
    var pos = this.Umbrella.position;
    imageMode (CENTER);
    image (this.image,pos.x,pos.y+70,300,300);

    }
    
    
    }