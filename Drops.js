class Drops {
constructor(x,y,r){
var options = {
restitution:0.4,
friction :0.1
}
this.r=r;
this.body = Bodies.circle(x,y,this.r,options);
this.color=color(blue);
World.add(world,this.body);



}


display(){


fill (this.color)
ellipseMode (CENTER);
ellipse(this.rain.position.x,this.rain.position.y, this.radius, this.radius);


if (this.rain.position.y>height){
Matter .Body.setPosition(this.rain, {x:random(0,400),y:random (0,400)})
}



}



}