let fghost;
class Fghost{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    fghost = document.getElementById("Fghost");
    this.obj = fghost.cloneNode(true);
    this.obj.setAttribute("position",{ x:this.x, y:this.y, z:this.z});
    scene.append(this.obj)
  }

  appear(x,z){
    this.x = x;
    this.z = z;
    this.y = -1;
    this.obj.setAttribute("position",{ x:this.x, y:this.y, z:this.z + 5});
  }

  remove(){
    this.y = -10;
    this.obj.setAttribute("position",{ x:this.z, y:this.y, z:this.z });
  }

  walk(xspeed,yspeed){
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.z = this.z-this.yspeed;
    this.x = this.x+this.xspeed;
    this.obj.setAttribute("position",{ x:this.x, y:this.y, z:this.z + 5});
  }

}
