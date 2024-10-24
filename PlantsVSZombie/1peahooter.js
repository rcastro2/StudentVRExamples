class Peashooter{
  constructor(x,z){
    this.x = x;
    this.z = z;
    this.pea = new Pea();
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#peashooter");
    this.obj.setAttribute("animation-mixer","");
    this.obj.setAttribute("scale","2.3 2.3 2.3");     
    this.obj.setAttribute("rotation", "0 90 0");
    this.obj.setAttribute("position",{x:this.x,y:0,z:this.z});
    this.health = 5;
    this.eaten = true;
    this.visible = true;
    
    this.obj.addEventListener("click",()=>{
      this.visible = false;
      this.obj.remove();
      s+=50;
    });
    
    scene.append(this.obj);
  }
  
  beingEaten(){
    if(!this.eaten){
      this.health -= 0.02;
    }
  }
  
}
