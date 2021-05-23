class Stone {
    constructor(x,y,width,height) {
      var options = {
			'restitution':0.8,
			'friction':0.9,
			'density':12
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(2);
      stroke("white");
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };