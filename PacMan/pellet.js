
class Pellet{
  
  constructor(x,z){
    this.x = x;
    this.y = 0;
    this.z = z
    let removeFlag = true;


    this.obj = document.createElement("a-entity");

    let p1 = document.createElement("a-sphere");
    p1.setAttribute("color","yellow");
    p1.setAttribute("radius",.3);
    p1.setAttribute("position",{ x:this.x, y:this.y+ 1, z:this.z });
    this.obj.append(p1);
    scene.append(this.obj)
  } 

  remove(){
    this.y = -10;
    this.obj.setAttribute("position",{ x:this.z, y:this.y, z:this.z });
  }
}