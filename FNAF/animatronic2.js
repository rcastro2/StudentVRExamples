class Animatronic2{
  constructor(x,y,z,model){
    this.model = model;
    this.kin = document.createElement("a-sphere");

    this.hitbox = document.createElement("a-box")
    // this.hitbox.setAttribute("wireframe","true");
    this.hitbox.setAttribute("opacity","0");
    this.hitbox.setAttribute("position","0 1 0.45");
    this.hitbox.setAttribute("height","2");
    this.hitbox.setAttribute("width","1.25");
    this.hitbox.setAttribute("depth","1.25");
    // this.hitbox.setAttribute("kinema-body","radius:1");
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src",model.template);
    this.obj.setAttribute("animation-mixer",{clip:model.charge,timeScale:0});
    this.obj.setAttribute("scale",`${model.scale} ${model.scale} ${model.scale}`);
    this.obj.setAttribute("position",{x:x,y:y,z:z})
    this.obj.setAttribute("sound",{src: this.model.sound, loop:false})
    // this.obj.setAttribute("kinema-body","radius:1");


    scene.append(this.obj);
  }
  angleTo(that){
      let dx = that.object3D.position.x - this.obj.object3D.position.x;
      let dz = that.object3D.position.z - this.obj.object3D.position.z;

      this.angle = Math.atan(dx/dz)
      if(dz < 0){
          this.angle += Math.PI
      }
  }
  rotateTowards(that){
      this.angleTo(that);
      this.obj.object3D.rotation.y = this.angle;
  }
  forward(){
      let dx = this.model.speed * Math.sin(this.angle);
      let dz = this.model.speed * Math.cos(this.angle);
      this.obj.object3D.position.x += dx;
      this.obj.object3D.position.z += dz; 
      this.obj.setAttribute("animation-mixer",{clip:this.model.charge, timeScale:0.75});
  }
  stop(){
    this.obj.setAttribute("animation-mixer",{timeScale:0});
  }
  jumpscare(that){
    that.setAttribute("position","0 98 0");
    // that.setAttribute("look-controls", "pointerLockEnabled: true");
    that.setAttribute("rotation","0 0 0");
    this.obj.setAttribute("animation-mixer",{clip:this.model.scare, timeScale:0.45});
    this.obj.setAttribute("position","0 100 -1.4");
    this.obj.setAttribute("rotation","0 0 0");
    console.log(this.obj.components.sound);
    this.obj.components.sound.playSound();

  }
}