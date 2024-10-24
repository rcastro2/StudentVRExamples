let rnd = (l,u) => Math.random() * (u-l) + l
let pea, scene, camera, stone, time, sunTEXT, house, level, gameStarted = false;
let peas=[], suns=[], mowers=[], sunflowers=[], peashooters=[], wallnuts=[], suns2=[], zombies=[], stones=[], trees = [];
let currentLevel = 1, currentDead = 0, t = 0, s=50;

//https://rcastro2.github.io/AidansBirthdayGame/   
//link for starting the game

window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  time = document.getElementById("time");
  sunTEXT = document.getElementById("sunTEXT");
  gameOver = document.getElementById("gameOver");
  house = document.getElementById("house");
  level = document.getElementById("level");

  //TREES
  for(let i = 0; i < 50; i++){
    let x = rnd(-80,-14);
    let z = rnd(-100,70);
    trees.push(new Tree(x, z));
  }
  for(let i = 0; i < 50; i++){
    let x = rnd(17,80);
    let z = rnd(-100,70);
    trees.push(new Tree(x, z));
  }
  for(let i = 0; i < 25; i++){
    let x = rnd(-20,20);
    let z = rnd(50,80);
    trees.push(new Tree(x, z));
  }
  for(let i = 0; i < 25; i++){
    let x = rnd(-20,20);
    let z = rnd(-100,-75);
    trees.push(new Tree(x, z));
  }

  //TOMBSTONES
  for(let i = 0; i < 50; i++){
    let x = rnd(-6.5,11.5);
    let z = rnd(-69, -50);
    stones.push(new Tombstone(x, z));
  }

  //LAWNMOWERS
  for(let i = -6; i<14; i+=2){
    mowers.push(new Lawnmower(i, 18));
    }

  //FALLING SUNS
    let x = rnd(-10,10);
    let y = rnd(10, 20);
    let z = rnd(-20,20);
    suns.push(new Sun(x,y,z));

  //PLACING DOWN PLANTS
  window.addEventListener("keydown",function(e){
    let x = camera.object3D.position.x;
    let z = camera.object3D.position.z;
    
    if(e.key == "1" && s>=50){
      sunflowers.push(new Sunflower(x,z));
      s-=50;
    } else if(e.key == "2" && s>=100){
      peashooters.push(new Peashooter(x,z));
      s-=100;
    } else if(e.key == "3" && s>=50){
      wallnuts.push(new Wallnut(x,z));
      s-=50;
    }
  })

  //STARTING THE GAME
  window.addEventListener("keydown",function(e){
    if(e.key == " " && !gameStarted){
      gameStarted = true;
      count();
      loop();
    }
  })

  //HIDE INTRO
  document.body.addEventListener('keydown', function(e){
    if(e.key == " "){
      hideIntro();
    }
    
  }, false)
}

function hideIntro(){
    intro.object3D.position.z -= 5
    if(intro.object3D.position.z < -550){
        intro.setAttribute("visible","false")
    }else{
        setTimeout(hideIntro,10)
    }
}

//Function generate wave which clears the array and adds the appropriate amount of zombies based on the current level 
function generateWave(){
  zombies = [];
  for(let i = 0; i < currentLevel; i++){
    let x = rnd(-6,12);
    let z = -50;
    zombies.push(new Zombie(x, z));
  }
}

//TIME
function count(){
  time.setAttribute("value",`Time: ${t.toFixed(0)}`);
  t++;
   if(t==50){
    generateWave();
  }
  setTimeout(count,1000);
}

function loop(){
  sunTEXT.setAttribute("value",`: ${s.toFixed(0)}`);
  level.setAttribute("value",`Level: ${currentLevel}`)
  
  for(let sun of suns){
      sun.fall(); 
  }

  //MOWERS MOW
  for(let mower of mowers){
    mower.move()
    for(let zombie of zombies){
      zombie.walk();
      if(distance(mower.obj,zombie.obj)<2){
        zombie.obj.remove();
        zombie.visible = false;
        mower.mow = true;
        currentDead++;
      }
      if(zombie.obj.object3D.position.z > 20){
        gameOver.setAttribute("opacity",1);
      }
    }
  }
 
  //SUNFLOWER PRODUCING SUN POWER
  for(let sunflower of sunflowers){
    sunflower.produceSunPower();
  }

  //ZOMBIES EATING PLANTS
  for(let wallnut of wallnuts){
    wallnut.beingEaten()
    for(let zombie of zombies){
      zombie.walk();
      if(distance(wallnut.obj,zombie.obj) < 2 && wallnut.visible){
         zombie.eating = true;
         wallnut.eaten = false;
        if(wallnut.health.toFixed(0) == 0){
          wallnut.eaten = true;
          wallnut.visible = false;
          wallnut.obj.remove();
          zombie.eating = false;
        }
      }
    }
  }

  //ZOMBIE EATING PEASHOOTER
  for(let peashooter of peashooters){
    peashooter.beingEaten()
    for(let zombie of zombies){
      zombie.walk();
      if(distance(peashooter.obj,zombie.obj) < 2 && peashooter.visible){
        zombie.eating = true;
        peashooter.eaten = false;
        if(peashooter.health.toFixed(0) == 0){
          peashooter.eaten = true;
          peashooter.visible = false;
          peashooter.obj.remove();
          zombie.eating = false;
        }
      }
    }
  }

  //ZOMBIE EATING SUNFLOWER
  for(let sunflower of sunflowers){
    sunflower.beingEaten()
    for(let zombie of zombies){
      zombie.walk();
      if(distance(sunflower.obj,zombie.obj) < 2 && sunflower.visible){
        zombie.eating = true;
        sunflower.eaten = false;
        if(sunflower.health.toFixed(0) == 0){
          sunflower.eaten = true;
          sunflower.visible = false;
          sunflower.obj.remove();
          zombie.eating = false;
        }
      }

    }
  }

  //PEASHOOTER KILLING ZOMBIES
  for(let peashooter of peashooters){
    for(let zombie of zombies){
      //If distance between zombie & peashooter is < 5 this the peashooter we want to shoot at
      if(distance(peashooter.obj,zombie.obj)< 70 && zombie.visible && peashooter.visible){
        peashooter.pea.shoot(peashooter.obj,zombie.obj);
      }
      //If a pea shoots a zombie set count to 0 for the pea and remove the zombie
      if(zombie.visible && distance(peashooter.pea.obj,zombie.obj) < 2 ){
        peashooter.pea.count = 0;
        zombie.health--;
        if(zombie.health == 0){
          zombie.obj.remove()
          zombie.visible = false;
          currentDead++;
        }
      }    
    }   
    peashooter.pea.move();
  }

  //NEXT LEVEL & END OF WAVES
  if(currentDead == currentLevel){ //if the currentDead is equal to the current Level, move on to the next level which means increase current level and produce new wave.  Set current dead back to 0
    currentLevel++;
    currentDead=0;
    generateWave();
  } 
  
  window.requestAnimationFrame(loop);
}




//DISTANCE FUNCTION
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