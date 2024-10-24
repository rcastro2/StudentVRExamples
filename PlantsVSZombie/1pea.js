class Pea{
  constructor(){
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("color", "lightgreen");
    this.obj.setAttribute("radius", ".2");
    this.fire = false;
    this.count = 0;
    scene.append(this.obj);
  }
  
  shoot(source, target){
    if(this.count == 0){
      let angle = this.angleTo(source,target)
      let pos = source.object3D.position;
      this.obj.setAttribute("position",{x:pos.x,y:pos.y + 1,z:pos.z});

      let v = 0.1; //Strength of the vector
      let v_xz = v * Math.cos(angle.phi); //Vector projected on the x-z plane
      this.dz = v_xz * Math.cos(angle.theta);
      this.dx = v_xz * Math.sin(angle.theta);
      this.dy = v * Math.sin(angle.phi);
      this.fire = true;
    }
    this.count++;
    if(this.count > 1000){
      this.count = 0;
    }

  }

  angleTo(source,target){
    let d = distance(source,target)
    let dx = target.object3D.position.x - source.object3D.position.x;
    let dy = target.object3D.position.y - source.object3D.position.y;
    let dz = target.object3D.position.z - source.object3D.position.z;

    let theta = Math.atan(dx/dz) //Sideways angle
    if(dz < 0){
        theta += Math.PI
    }
    let phi = Math.asin(dy/d); //Up down angle

    return {theta:theta,phi:phi};
  }

  move(){
    if(this.fire){
      this.obj.object3D.position.x += this.dx;
      this.obj.object3D.position.y += this.dy;
      this.obj.object3D.position.z += this.dz;
    }
  }

  
}