class Lawnmower{
  constructor(x,z){
    this.x = x;
    this.z = z;
    this.dz = -0.05;
    this.mow = false;
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#lawnmower");   
    this.obj.setAttribute("rotation", "0 90 0");
    this.obj.setAttribute("position",{x:this.x,y:0.5,z:18});
    scene.append(this.obj);
  }

  move(){
    if(this.mow){
      this.z += this.dz;
      this.obj.setAttribute("position",{x:this.x, y:0.5, z:this.z});
    }
    
  }
  
}