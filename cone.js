class Box {
    constructor(x1, y1, x2, y2,x3,y3) {
      var options = {
       isStatic:true
  
      }
        
          //'restitution':0.8,
         // 'friction':0.3,
         //'density':1.0
      
      this.body = Bodies.triangle(x1, y1, x2,y2,x3,y3,options);
      this.x1 = x1;
      this.y1 = y1;
   
      this.x2= x2;
      this.y2 = y2;
     
      this.x3 = x3;
      this.y3 = y3;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate (angle);
     rectMode(CENTER);
      fill(255);
      rect(0, 0,0,0,0,);
      pop();
  
    }
  };
  