class Wallnut{
  constructor(x,z){
    this.obj= document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#wallnut");
    this.obj.setAttribute("position",{x:x,y:0,z:z});
    this.obj.setAttribute("scale","20 20 20");
    this.obj.setAttribute("rotation", "0 180 0");
    this.health = 10;
    this.eaten = true;
    this.visible = true;

    // this.obj.addEventListener("click",()=>{
    //   this.eaten = true;
    // });
    
    this.obj.addEventListener("click",()=>{
      this.visible = false;
      this.obj.remove();
      s+=25;
    });
    
    scene.append(this.obj);
  }

  beingEaten(){
    if(!this.eaten){
      this.health -= 0.02;
    }
  }
}