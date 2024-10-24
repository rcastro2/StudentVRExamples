class Camera{
  constructor(x,y,z,rx,ry,rz){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.rz = rz;
    this.obj = document.createElement("a-entity");
    this.model = document.createElement("a-gltf-model");
    this.model.setAttribute("src","#camera");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("rotation",{x:rx,y:ry,z:rz});
    this.model.setAttribute("scale","0.002 0.002 0.002");
    this.camera = document.createElement("a-camera");
    this.camera.setAttribute("active",false);
    this.camera.setAttribute("wasd-controls-enabled",false);
    this.camera.setAttribute("position","0 0 1");
    this.camera.setAttribute("rotation","0 0 0");
    this.camera.setAttribute("look-controls", "pointerLockEnabled: true");
    // let curs = document.createElement("a-cursor");
     // this.camera.append(curs);
    this.obj.append(this.camera);
    this.obj.append(this.model);
    scene.append(this.obj);


  }


}