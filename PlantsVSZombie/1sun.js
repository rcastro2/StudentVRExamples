class Sun{
  constructor(x,y,z){
    console.log("Sun")
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -0.03;
    this.collected = false;
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#sun");
    this.obj.setAttribute("scale","0.4 0.4 0.4");

    this.obj.addEventListener("click",()=>{
      this.collect();
    });

    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  
  fall(){
    if(this.y > 1){
      this.y += this.dy;
      this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z}); 
    } else{
      if(!this.done){
        let x = rnd(-10,10);
        let y = rnd(10, 20);
        let z = rnd(-20,17);
        suns.push(new Sun(x,y,z));
        this.done = true;
      }
      // console.log("fell")
      // setTimeout(()=>{
      //   console.log("reposition")
        
      // },2000)
    }
  }

  collect(){
    if(!this.collected){
      s+=25;
      this.collected = true;
      this.obj.remove();
    }
  }
  
}