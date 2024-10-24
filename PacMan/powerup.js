let power;
let c;
let r = 255;
let g = 255;
let b = 255;
class Pup{
  constructor(x,z){
    this.x = x;
    this.y = 0;
    this.z = z;
    this.a = 0;
    power = document.getElementById("powerup");
    c = document.createElement("a-sphere");
    c.setAttribute("opacity","1");


    this.obj = power.cloneNode(true);

    this.obj.append(c)
    this.obj.setAttribute("position",{ x:this.x, y:0, z:this.z});

    scene.append(this.obj)
  }
  rotate(){
    this.a += 1;
    c.setAttribute("rotation",{x:0,y:this.a,z:0});
    this.obj.setAttribute("rotation",{x:0,y:this.a,z:0});
  }

  remove(){
    this.y = -10;
    powerupMusic.play();
    this.obj.setAttribute("position",{ x:this.z, y:this.y, z:this.z });
  }
}