class Tombstone{
  constructor(x, z){
    this.obj = document.createElement("a-entity");
    let box = document.createElement("a-box");
    box.setAttribute("position","0 0.5 0");
    box.setAttribute("color", "grey");
    box.setAttribute("depth", "0.5");
    this.obj.append(box);
    
    let cylinder = document.createElement("a-cylinder");
    cylinder.setAttribute("color", "grey");
    cylinder.setAttribute("theta-start", "0");
    cylinder.setAttribute("theta-length", "180");
    cylinder.setAttribute("radius", "0.5");
    cylinder.setAttribute("position", "0 1 0");
    cylinder.setAttribute("rotation", "0 270 90");
    cylinder.setAttribute("height", "0.5");
    this.obj.append(cylinder);

    this.obj.setAttribute("position",{x:x,y:0,z:z})
    scene.append(this.obj);
  }
}