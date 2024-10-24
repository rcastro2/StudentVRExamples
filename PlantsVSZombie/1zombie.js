class Zombie{
  constructor(x,z){
    this.x = x;
    this.z = z;
    this.dz = 0.005;
    this.visible = true;
    this.health = 5;
    
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#zombie");
    this.obj.setAttribute("animation-mixer","");
    this.eating = false;

    this.obj.setAttribute("position",{x:this.x,y:0,z:this.z});
    scene.append(this.obj);
  }

  walk(){
    if(!this.eating){
      this.z += this.dz;
      this.obj.setAttribute("position",{x:this.x, y:0, z:this.z});
    }
  }
      
}