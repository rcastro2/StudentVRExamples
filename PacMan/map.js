
let objPellet = [];
let ghosts = [];
let fghosts = [];
let objWall = [];
let wallLength = [];
let wallPosition = [];
let powerups = [];
let g1,g2,g3,g4, xspeed, yspeed, opening, x,y,z, fg1, fg2, fg3, fg4;
let cherry = false;
let cherry1;
let cherry2 = 0;
let cherryRandom, cherryRandom2 = 0;
let left = true;
let right = false;
let up2 = true;
let down2 = false;
let left1 = true;
let right1 = false;
let up3 = false;
let down3 = true;
let up4 = true;
let down4 = false;
let move1 = true;
let move2 = true;
let move3 = true;
let move4 = true;

class MyMap{
  constructor(){
    this.obj = document.createElement("a-entity");
    
    for(let w of walls){
      objWall.push(new Wall(w.x,-w.y,w.w,w.o,"dynamic-body"));
      wallLength.push(w.w);
      wallPosition.push(w.o);
      objWall.push(new Wall(-w.x,-w.y,w.w,w.o,"dynamic-body"));
      wallLength.push(w.w);
      wallPosition.push(w.o);
    }

    this.obj.append(new Tele(-28,-24,5));
    this.obj.append(new Tele(-28,-3.5,4));
    this.obj.append(new Tele(28,-24,5));
    this.obj.append(new Tele(28,-3.5,4));
    let rand = [];
    
    let r1 = true;
    while(r1){
      if((rand.indexOf(rnd(0,pellets.length-1)) == -1) && (rand.length<4)){
        rand.push(rnd(0,pellets.length-1));
      }else{
        r1 = false;
      }
    }
    
  
    for(let i = 0; i<pellets.length;i++){
      let p = pellets[i];
      let rand2= rnd(1,3);  
      
      
      
      if(rand.indexOf(i)==-1){
        objPellet.push(new Pellet(p.x,-p.y))
        objPellet.push(new Pellet(-p.x,-p.y))
      }else{
        if(rand2 == 1){
          objPellet.push(new Pellet(p.x,-p.y))
          objPellet.push(new Pellet(-p.x,-p.y))
          let pu = new Pup(-p.x,-p.y);//Pup
          powerups.push(pu);
          this.obj.append(pu);
        }else{
          objPellet.push(new Pellet(p.x,-p.y))
          objPellet.push(new Pellet(-p.x,-p.y))
          let pu = new Pup(p.x,-p.y);//Pup
          powerups.push(pu);
          this.obj.append(pu);
        }
        
      }
    }
    for(let p of objPellet){
      this.obj.append(p)
    }
    
    cherry1 = new Cherry(0, -9, 0);

    fg1 = new Fghost(0,-10, 0);
    fg2 = new Fghost(0,-10, 0);
    fg3 = new Fghost(0,-10, 0);
    fg4 = new Fghost(0,-10, 0);

    fghosts = [fg1,fg2,fg3,fg4]
    
    g1 = new Ghost(0, -14,  "#FF0000");
    //g1.rotate();
    //console.log(g1)
    g2 = new Ghost(-15, 6, "#FFB851");
    g3 = new Ghost(-25, 18,  "#FFB8FF");
    g4 = new Ghost(15, 18,  "#00FFFF");
    ghosts = [g1,g2,g3,g4];
    this.obj.append(g1);
    this.obj.append(g2);
    this.obj.append(g3);
    this.obj.append(g4);
    
    scene.append(this.obj);

  }

  generateCherry(score){
    if(score == 100){
      cherry2++; 
    }
    if(cherry2 == 1){
      cherry = true;
      cherryRandom = rnd(0,2)
      cherryRandom = rnd(0,pellets.length);
    }
    if(cherry && cherry1.y!=-10){
      for(let i = 0; i<pellets.length;i++){
        let p = pellets[i];
        if(i == cherryRandom){
          if(cherryRandom2 = 1){
            cherry1.appear(p.x, -p.y);
          }else{
            cherry1.appear(p.x, -p.y);
          }
          
        }
      }

    }
    //console.log(cherry1.x,cherry1.y,cherry1.z)
  }

  rotatePowerups(){
    for(let pu of powerups){
      pu.rotate();
    }
  }
  
  walkGhosts(){
    
 
    if(g1.x == 0 && g1.z == -18){
      move1 = false;
    }
    if(g2.x == 0 && g2.z == -18){
      move2 = false;
    }
    if(g3.x == 0 && g3.z == -18){
      move3 = false;
    }
    if(g4.x == 0 && g4.z == -18){
      move4 = false;
    }
    
    if(move1){
      if(left1){
        g1.walk(-0.1,0)
        fg1.walk(-.1,0)
      }
      if(right1){
        g1.walk(0.1,0)
        fg1.walk(0.1,0)
 
      }
    if(move2){
      if(up2){
        g2.walk(0,0.1)
        fg2.walk(0,0.1)
      }
      if(down2){
        g2.walk(0,-0.1)
        fg2.walk(0,-0.1)
      }
    }
    if(move3){
      if(up3){
        g3.walk(0,0.1)
        fg3.walk(0,0.1)
      }
      if(down3){
        g3.walk(0,-0.1)
        fg3.walk(0,-0.1)
    
      }
    }
    if(move4){
      if(up4){
        g4.walk(0,0.1)
        fg4.walk(0,0.1)
      }
      if(down4){
        g4.walk(0,-0.1)
        fg4.walk(0,-0.1)
      }
    }
    }
    
    if(g1.x<-26){
      right1 = true;
      left1 = false;
    }else if(g1.x>26){
      right1 = false;
      left1 = true;
    }

    if(g2.z<-25){
      up2 = false;
      down2 = true;
    }else if(g2.z>3){
      down2 = false;
      up2 = true;
    }

    if(g3.z<-43){
      up3 = false;
      down3 = true;
    }else if(g3.z>-7){
      down3 = false;
      up3 = true;
    }

    if(g4.z<-25){
      up4 = false;
      down4 = true;
    }else if(g4.z>3){
      down4 = false;
      up4 = true;
    }
    
    
  }
  
  removeCherry(c){
    if(collision(cherry1,cherry1.y,c)){
      cherry1.remove()
      s += 100;
    }
  }
  
  removePellets(c){
    for(let p of objPellet){
      if(collision(p,p.y,c)){
        p.remove();
      }
    }
  }

  removeFghosts(c){
    for(let i = 0;i<4; i++){
      let fg = fghosts[i];
      let g = ghosts[i];
      if(collision(fg,fg.y,c)){
        g.appear(0,18);
        //console.log(g.x,g.y,g.z)
        fg.remove();
        ghostEat.play()
      }
    }
  }

  removePowerup(c){
    let pflag = false;
    
    for(let p of powerups){
      if(collision(p,p.y,c)){
        p.remove();
        pflag = true;
      }
    }
    if(pflag){
      for(let i = 0; i<4;i++){
        let g = ghosts[i];
        let f = fghosts[i];
        f.appear(g.x,g.z);
        g.remove();
      }
      pflag = false;
    }

    
  }

}