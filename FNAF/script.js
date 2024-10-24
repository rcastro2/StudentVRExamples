let p = 3.6;
let dp = -3.6;
let p1 = 3.6;
let dp1 = -3.6;
let on = false;
let rnd = (l,u) => Math.random()*(u-l) + l;
let scene;
let camera;
let cursor;
let j=0;
let dj=1;
let power;
let flash = false;
let bar;
let eg;
let night = 1;
let hour=00;
let minute=00;
let cameras = [];
let c = 0;
let main = true;
let fmodel;
let animatronics = [];
let fox;
let bear;
let bird;
let bunny;
let boo = false;
let boo1 = false;
let boo2 = false;
let boo3 = false;
let doo1 = false;
let doo2 = false;
let chica = {template:"#chicaModel",charge:"Chica--Charge",scale:0.6,speed:0.1,scare:"Chica--Jumpscare",sound:"#sound"}
let foxy = {template:"#foxyModel",charge:"Foxy--Charge",scale:0.6,speed:0.4,scare:"Foxy--Jumpscare",sound:"#sound"};
let freddy={template:"#freddyModel",charge:"Freddy--Charge",scale:0.6,speed:0.2,scare:"Freddy--Jumpscare",sound:"#sound"}
let bonnie={template:"#bonnieModel",charge:"Bonnie--Charge",scale:1.4,speed:0.2,scare:"Bonnie--Jumpscare",sound:"#fsound"};
window.onload = function(){
  let door = document.getElementById("door1");
  let button = document.getElementById("booten1");
  mainCamera = document.getElementById("mainCamera");
  bar = document.getElementById("energy");
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  cursor = document.querySelector("a-cursor");
  fmodel = document.getElementById("flashlightmodel");
  power=100;
  bunny = new Animatronic(-2,0,-45,bonnie);
   bear = new Animatronic2(2,2,-45,freddy);
  bird = new Animatronic(6,0,-45,chica);
  fox = new Animatronic2(-12,0,-22.3,foxy);

  fox.obj.setAttribute("rotation","0 90 0");
  // for(let i=0; i<3; i++){
  //   let cam = new Camera(rnd(-20,20),rnd(5,10),rnd(-20,20),0,0,0);
  //   cameras.push(cam);
  // }
  let cam1 = new Camera(-5.5,4,8.7,0,180,0);
  cameras.push(cam1);
  let cam2 = new Camera(5.5,4,8.7,0,180,0);
  cameras.push(cam2);
  let cam3 = new Camera(0,4,-20.2,0,180,0);
  cameras.push(cam3);
  let cam4 = new Camera(-13,4,-34,0,180,0);
  cameras.push(cam4);
  let cam5 = new Camera(18,4,-20.2,0,180,0);
  cameras.push(cam5);
  
  button.addEventListener("click", ()=>{
    doo1 = !doo1;
    p += dp;
    dp = -dp;
    door.setAttribute("position", `-3 ${p} 6.8`);
    if(button.getAttribute("color") == "red"){
      button.setAttribute("color", "green");
    }else{
      button.setAttribute("color", "red");
    }
  });

  let door1 = document.getElementById("door2");
  let button1 = document.getElementById("booten2");
 
  button1.addEventListener("click", ()=>{
    doo2 = !doo2;
    p1 += dp1;
    dp1 = -dp1;
    door1.setAttribute("position", `3 ${p1} 6.8`);
    if(button1.getAttribute("color") == "red"){
      button1.setAttribute("color", "green");
    }else{
      button1.setAttribute("color", "red");
    }
  });;


    window.addEventListener("keydown",function(e){
      if(e.key == "f"){
        console.log("click");
        flash = !flash;
      }
      // j += dj;
      // if(j>0 || power<1){
      //   flash=false;
      //   j=1;
      //   flashlight.setAttribute("light"," intensity:0");
      // }else if(j<1){
      //   flashlight.setAttribute("light"," intensity:1");
      //   flash=true;
      // }else if(power<0){
      //   flashlight.setAttribute("light"," intensity:0");
      //   j=1;
      //   flash=false;
      // }
      // // click to turn flashlight on and off
      // dj = -dj;

    });
    window.addEventListener("keydown",function(e){
      console.log(cameras[c]);

      if(e.key == " "){
        for(let camera of cameras){
          camera.camera.setAttribute("active",false);
        }
        mainCamera.setAttribute("active",true);
        main = true;
        //cameras[c].camera.setAttribute("active",false);
      }
     else if(e.key == "e"){
       main = false;
        for(let camera of cameras){
          camera.camera.setAttribute("active",false);
        }
        mainCamera.setAttribute("active",false);

        c++;
        if(c > cameras.length-1){
          c = 0;
        }

       cameras[c].camera.setAttribute("active",true);

       // cameras[c-1].camera.setAttribute("active",false);


        }

       //console.log(c);          
     });
    loop();

} 
function loop(){
  console.log(p);
  // if(power < 1 && p === 0){
  //   console.log("open sesame")
  //   p += dp;
  //   dp = 0;
  // }
  let d = distance(fox.obj,camera);
  let d2 =distance(bear.obj,camera);
   let d3 =distance(bird.obj,camera);
  let d4 = distance(bunny.obj,camera);
  if(0 < d && d < 10 && boo === false){
    fox.rotateTowards(camera);
    fox.forward();
  }else{
    fox.stop();
  }
  if(0 < d && d < 2){
    boo = true;
  }
  if(boo){
    fox.jumpscare(camera);
  }
  if(0 < d2 && d2 < 1 && boo1 === false){
    bear.rotateTowards(camera);
    bear.forward();
  }else{
    bear.stop();

  }
  if(0 < d2 && d2 < 1){
    boo1 = true;
  }
  if(boo1){
    bear.jumpscare(camera);
  }
  if(0 < d3 && d3 < 10 && boo2 === false){
    bird.rotateTowards(camera);
    bird.forward();
  }else{
    bird.stop();

  }
  if(0 < d3 && d3 < 2){
    boo2 = true;
  }
  if(boo2){
    bird.jumpscare(camera);

    // crotateTowards(camera,bird);
  }
  if(0 < d4 && d4 < 10 && boo3 === false){
    bunny.rotateTowards(camera);
    bunny.forward();
  }else{
    bunny.stop();

  }
  if(0 < d4 && d4 < 2){
    boo3 = true;
  }
  if(boo3){
    bunny.jumpscare(camera);
  }
  eg = power/50;
  if(eg < 0 || main === false){
    flash = false;
    fmodel.setAttribute("position","1000 1000 1000");
    bar.setAttribute("opacity","0");
    output.setAttribute("opacity","0");

  }else {
    fmodel.setAttribute("position","0.4 -0.75 0.5");
    bar.setAttribute("opacity","1");
    output.setAttribute("opacity","1");
  }
  console.log(main);
  updateFlashlight();

  updateE();
  updateTime();
  //console.log(power);
  output.setAttribute("value",`Night:${night}\nTime:${hour}:${minute} AM`);
  output.setAttribute("color","white");
    window.requestAnimationFrame( loop );


}
function updateFlashlight(){
  if(flash){
    power -= 0.001;
  }
  if(flash){
      flashlight.setAttribute("light"," intensity:1");
    }else {
      flashlight.setAttribute("light"," intensity:0");
    }
  // if(main){
  //   flashlight.setAttribute("position","0.4 -0.75 0.5");
  // }else if(main === false){
  //   flashlight.setAttribute("positon","1000 1000 1000");
  // }
  let angle = camera.object3D.rotation.y + Math.PI;
  let x = 1.5 * Math.sin(angle) + camera.object3D.position.x;
  let z = 1.5 * Math.cos(angle) + camera.object3D.position.z;
  flashlight.setAttribute("position",{x:x,y:1,z:z});
  //Rotate the box instead of the spot light
  flashlight.object3D.rotation.y = angle + Math.PI;
  flashlight.object3D.rotation.x = camera.object3D.rotation.x * 1.5;
}
function updateE(){
  if(doo1){
    power -= 0.05;
  }
  if(doo2){
    power -= 0.05;
  }
  bar.setAttribute("width",` ${eg}`);

}
function updateTime(){

  minute += 1;
  if(minute>59){
    minute=00;
    hour++;


  }else if(hour>5){
    night++;
     hour=00;

  }
}
function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}