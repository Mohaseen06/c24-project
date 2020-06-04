class Paper{
    constructor(x,y,radius){
        var paper_options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        this.body = Bodies.circle(x, y, radius, paper_options);
        this.radius = radius;
        //this.angle= angle;
        World.add(world,this.body)
    }

    display(){
       // var angle = this.body.angle;
        ellipseMode(RADIUS);
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,20)
    }   
}