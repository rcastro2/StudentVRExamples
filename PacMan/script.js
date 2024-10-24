let scene,camera;
let mymap;
let scoreFlag;
let s = -1, gcount = 0;

let intro = new Howl({
  src: ['Intro.mp3']
});

let powerupMusic = new Howl({
  src: ['powerup.mp3']
});

let chomp = new Howl({
  src: ['Chomp.mp3']
});

let death = new Howl({
  src: ['Death.mp3']
});

let ghost = new Howl({
  src: ['Ghost.mp3']
});

let ghostEat = new Howl({
  src: ['ghostEat.mp3']
});
window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("#camera");

  intro.play();
  
  mymap =  new MyMap();
  
  
  loop();
}

function loop(){
  mymap.rotatePowerups();

  
  for(let p of objPellet){
    if(collision(p,p.y,camera)){
      scoreFlag = true;
      chomp.play()
    }
  }
  //console.log(s)
  if(scoreFlag){
    s++;
    scoreFlag = false;
  }
  mymap.generateCherry(s);
  
  

  
  score = document.getElementById("score");
  score.setAttribute("value",`Score: ${s}`);
  mymap.removePellets(camera);
  mymap.removePowerup(camera);
  mymap.removeFghosts(camera);
  mymap.removeCherry(camera);
  
  mymap.walkGhosts();
  for(let g of ghosts){
    if(collision(g,g.y,camera)){
      camera.object3D.position.x = 0;
      camera.object3D.position.z = 0;
      death.play()
    }

    if(distance(camera.object3D.position.x,camera.object3D.position.z,g) < 2){
      gcount++;
      if(gcount == 15){

        ghost.play()
        gcount = 0;
      }
      
    }
  }
  
  //console.log(camera.object3D.position.z)

  setTimeout(loop,10);
}
// <a-camera position="0 30 0"></a-camera>