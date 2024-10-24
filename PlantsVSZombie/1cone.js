class Cone{
  constructor(x,z){
    this.x = x;
    this.z = z;
    this.dz = 0.005;
    this.visible = true;
    this.health = 10;
    
    this.obj = document.createElement("a-entity");
    let zombie = document.createElement("a-gltf-model");
    zombie.setAttribute("src","#zombie");
    zombie.setAttribute("animation-mixer","");     
    zombie.setAttribute("position",{x:0, y:0, z:0});
    this.obj.append(zombie);
    
    let cone = document.createElement("a-gltf-model");
    cone.setAttribute("src","#cone");    
    cone.setAttribute("rotation","-15 0 0");
    cone.setAttribute("position",{x:-0.1, y:2.4, z:0});
    this.obj.append(cone);

    this.obj.setAttribute("position",{x:this.x, y:0, z:this.z});
    scene.append(this.obj)
  }
  
  walk(){
    this.z += this.dz;
    this.obj.setAttribute("position",{x:this.x, y:0, z:this.z});
  }

}