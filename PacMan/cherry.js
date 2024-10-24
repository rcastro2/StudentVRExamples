class Cherry{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z

    this.obj = document.createElement("a-entity");

    let p1 = document.createElement("a-sphere");
    p1.setAttribute("color","red");
    p1.setAttribute("radius",1);
    p1.setAttribute("position",{ x:-1, y:5, z:1 });

    let p2 = document.createElement("a-sphere");
    p2.setAttribute("color","red");
    p2.setAttribute("radius",1);
    p2.setAttribute("position",{ x:1, y:5, z:1 });

    let p3 = document.createElement("a-cylinder");
    p3.setAttribute("color","green");
    p3.setAttribute("radius",.15);
    p3.setAttribute("rotation", "0 0 20");
    p3.setAttribute("height",3);
    p3.setAttribute("position",{ x:0.5, y: 7, z:1 });

    let p4 = document.createElement("a-cylinder");
    p4.setAttribute("color","green");
    p4.setAttribute("radius",.15);
    p4.setAttribute("rotation", "0 0 -20");
    p4.setAttribute("height",3);
    p4.setAttribute("position",{ x:-.5, y:7, z: 1 });

    let p5 = document.createElement("a-box");
    p5.setAttribute("color","green");
    p5.setAttribute("width",.4);
    p5.setAttribute("rotation", "90 90 0");
    p5.setAttribute("height",2);
    p5.setAttribute("depth",.5);
    p5.setAttribute("position",{ x:0, y:8.3, z:1 });

    
    this.obj.append(p1);
    this.obj.append(p2);
    this.obj.append(p3);
    this.obj.append(p4);
    this.obj.append(p5);
    this.obj.setAttribute("position",{ x:this.x, y:this.y, z:this.z })
    scene.append(this.obj)
  }

  appear(x,z){
    this.x = x ;
    this.z = -z;
    this.y = -4;
    this.obj.setAttribute("position",{ x:this.x, y:this.y, z:this.z});
  }

  remove(){
    this.y = -10;
    this.obj.setAttribute("position",{ x:this.z, y:this.y, z:this.z });
  }
}

