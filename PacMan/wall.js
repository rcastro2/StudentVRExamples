

class Wall{
  constructor(x,z,l,o){
    this.x = x;
    this.z = z;
    this.l = l;
    this.o = o;
    this.obj = document.createElement("a-entity");

    let p1 = document.createElement("a-box");
    p1.setAttribute("material","color:aqua; side:double");
    p1.setAttribute("height",5);
    p1.setAttribute("position",{ x:0, y:0, z:0});
    p1.setAttribute("width",this.l);
    p1.setAttribute("depth",1);
    this.obj.append(p1);
    if(o == "v"){
      this.obj.setAttribute("rotation","0 90 0");
    }
    if(o == "h"){
      this.obj.setAttribute("rotation","0 0 0");
    }
    this.obj.setAttribute("static-body","");
    
    this.obj.setAttribute("position",{ x:this.x, y:2.5, z:this.z});
    
    scene.append(this.obj)
  }


  stop(c){
    c.object3D.position.x =  Math.round(c.object3D.position.x)
    c.object3D.position.z =  Math.round(c.object3D.position.z)
    console.log("stop")
  }
}

class Tele{
  constructor(x,z,l){
    this.x = x;
    this.z = z;
    this.l = l;
    this.obj = document.createElement("a-entity");

    let p1 = document.createElement("a-box");
    p1.setAttribute("material","color:white; side:double");
    p1.setAttribute("height",5);
    p1.setAttribute("position",{ x:0, y:0, z:0});
    p1.setAttribute("width",this.l);
    p1.setAttribute("depth",1);
    this.obj.append(p1);
    this.obj.setAttribute("rotation","0 90 0");
    this.obj.setAttribute("position",{ x:this.x, y:2.5, z:this.z});
    
    scene.append(this.obj)
  }
}
