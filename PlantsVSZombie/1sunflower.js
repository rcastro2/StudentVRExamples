class Sunflower{
  constructor(x,z){
    this.power= false;
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#sunflower");
    //this.obj.setAttribute(type,"");
    this.obj.setAttribute("position",{x:x,y:0,z:z});
    this.obj.setAttribute("scale","1 1 1");
    this.obj.setAttribute("rotation", "0 180 0");
    this.health = 3;
    this.eaten = true;
    this.visible = true;
    
    this.obj.addEventListener("click",()=>{
      this.power = true;
      this.visible = false;
      s+=25;
      this.obj.remove()
    });
    
    scene.append(this.obj);
  }
  
  produceSunPower(){
    if(!this.power){
      s+=0.02;
    }
  }

  beingEaten(){
    if(!this.eaten){
      this.health -= 0.02;
    }
  }
  // produceSunPower(){
  //   s+= 0.04;
  // }
  
}