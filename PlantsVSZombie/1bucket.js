class Bucket{
  constructor(x,z){
    this.x = x;
    this.z = z;
    this.dz = 0.005;
    this.visible = true;
    this.health = 15;
    
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#bucket");
    this.obj.setAttribute("scale","0.007 0.007 0.007");     

    this.obj.setAttribute("position",{x:this.x,y:1.7,z:this.z});
    scene.append(this.obj);
  }
  
  walk(){
    this.z += this.dz;
    this.obj.setAttribute("position",{x:this.x, y:1.7, z:this.z});
  }
  
}