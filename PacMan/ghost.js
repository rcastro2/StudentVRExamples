let removeNum = -1;
let randomTurn = -1;
class Ghost{
  constructor(x,z,c){
    this.x = x;
    this.z = -z;
    this.y = -1;
    this.c = c;
    this.obj = document.createElement("a-entity");
    this.yspeed;
    this.xspeed;


    let p1 = document.createElement("a-cylinder");
    p1.setAttribute("position",{ x: 0, y: 4.5, z:0 });
    p1.setAttribute("height",.2);
    p1.setAttribute("radius",2);
    p1.setAttribute("rotation","90 0 0");
    p1.setAttribute("theta-start",90);
    p1.setAttribute("theta-length",180);
    p1.setAttribute("color",this.c);

    let p2 = document.createElement("a-box");
    p2.setAttribute("position",{ x: 0, y: 3.5, z:0 });
    p2.setAttribute("height",2);
    p2.setAttribute("width",4);
    p2.setAttribute("depth", .2);
    p2.setAttribute("theta-start",90);
    p2.setAttribute("theta-length",180);
    p2.setAttribute("color",this.c);

    this.obj.append(p1);
    this.obj.append(p2);
    this.obj.append( new Leg(- 1.3,2.5, 0, this.c));
    this.obj.append( new Leg(0, 2.5, 0, this.c));
    this.obj.append( new Leg( 1.3,2.5, 0, this.c));
    this.obj.append( new Eye(-1,4.5,.1, this.c));
    this.obj.append( new Eye(.6,4.5,.1, this.c));
    this.obj.setAttribute("position",{ x: this.x, y: this.y, z:this.z });

    scene.append(this.obj)

  }

  walk(xspeed,yspeed){
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.z = this.z-this.yspeed;
    this.x = this.x+this.xspeed;
    this.obj.setAttribute("position",{ x:this.x, y:this.y, z:this.z});
  }

  remove(){
    this.y = -10;
    this.obj.setAttribute("position",{ x:this.z, y:this.y, z:this.z });
  }

  appear(x,z){
    this.x = x;
    this.z = -z;
    this.y = -1;
    this.obj.setAttribute("position",{ x:this.x, y:this.y, z:this.z});
  }

  rotate(){
    this.obj.setAttribute("rotation", "90 0 0");
  }


}

class Leg{
  constructor(x,y,z,c){
    this.x = x;
    this.z = z;
    this.y = y;
    this.c = c;

    this.obj = document.createElement("a-entity");
    let p1 = document.createElement("a-cylinder");
    p1.setAttribute("position",{ x:this.x, y:this.y, z:this.z});
    p1.setAttribute("height",.2);
    p1.setAttribute("radius",.7);
    p1.setAttribute("rotation","90 0 0");
    p1.setAttribute("theta-start",-90);
    p1.setAttribute("theta-length",180);
    p1.setAttribute("color",c);

    this.obj.append(p1);

    return this.obj;

  }
}

class Eye{
  constructor(x,y,z,c){
    this.x = x;
    this.z = z;
    this.y = y;
    this.c = c;

    this.obj = document.createElement("a-entity");
    let p1 = document.createElement("a-cylinder");
    p1.setAttribute("position",{ x:this.x, y:this.y, z:this.z });
    p1.setAttribute("height",.1);
    p1.setAttribute("radius",.7);
    p1.setAttribute("rotation","90 0 0");
    p1.setAttribute("color","#DEDEFF");

    let p2 = document.createElement("a-cylinder");
    p2.setAttribute("position",{ x:this.x-.3, y:this.y, z:this.z+.1 });
    p2.setAttribute("height",.1);
    p2.setAttribute("radius",.4);
    p2.setAttribute("rotation","90 0 0");
    p2.setAttribute("color","#2121FF");

    this.obj.append(p1);
    this.obj.append(p2);
    return this.obj;

  }
}
