let rep = 0;
let repnew = 0;
let dim = 55;

let k = 1,i=0;
let go = 0;

let dmin = 100;
let dminoffset = 100;

let d = 5;
let weight = 1.8;
let incerment=1;

let difa = 0;
let difb = 0;
let difc = 0;

let rotation =[ [], [] ];

let ration= [ [],[] ,[] ];

let modules = [];
let tails = [];
let side = [];

 let theta=0;

//let rotation1 = 0, rotation2 = 0;
let stop = 0,bias1 = 0,sum=0, rat=1, y=0;


//for WEBGL
let rope = [] ;
let ropeLength = 20; // Number of segments
let segmentLength = 10; // Length of each segment
let gravity = []; // Gravity strength

let gaudi = 0;



class cube {
  constructor(x,y,dim,ratio,direction,diference,k,rep){
    this.xposition = x;
    this.yposition = y;
    this.side = ratio*dim;
    this.direction = direction;
    this.dif = diference;
    this.mode = k;
    this.rep = rep
  }render(){
    //fill("black");
    noFill();
    if (this.mode == this.rep){
      stroke("yellow");
    }else{
      //print(rep);
      stroke("black");
    }
    if (this.direction == 1){
    strokeWeight(0.2);
   
    rect (this.xposition - this.side,this.yposition - this.side,this.side*2,this.side*2+this.dif);
       strokeWeight(weight);
    line(this.xposition - this.side,
         this.yposition - this.side,
         this.xposition -this.side,
         this.xposition+this.dif );
      line(this.xposition + this.side,
           this.yposition - this.side,
           this.xposition + this.side,
           this.xposition+this.dif )
      //line(this.xposition - this.side,this.xposition - this.side + this.side*2,this.xposition + this.side,this.xposition - this.side + this.side*2)
      arc(this.xposition,this.yposition+this.dif,2*this.side,2*this.side,0,PI);
    }
     if (this.direction == 2){
       strokeWeight(0.2);
    rect (this.xposition - this.side,this.yposition - this.side,this.side*2,this.side*2+this.dif);
       strokeWeight(weight);
    line(this.xposition - this.side,
         this.yposition - this.side,
         this.xposition -this.side,
         this.xposition+this.dif );
      line(this.xposition + this.side,
           this.yposition - this.side,
           this.xposition + this.side,
           this.xposition+this.dif )
      //line(this.xposition - this.side,this.xposition - this.side + this.side*2,this.xposition + this.side,this.xposition - this.side + this.side*2)
      arc(this.xposition,this.yposition+this.dif,2*this.side,2*this.side,0,PI);
    }
     if (this.direction == 3){
    strokeWeight(0.2);
     
    rect (this.xposition - this.side,this.yposition - this.side,this.side*2,this.side*2+this.dif);
    
       strokeWeight(weight);
    line(this.xposition - this.side,
         this.yposition - this.side,
         this.xposition -this.side,
         this.xposition+this.dif );
      line(this.xposition + this.side,
           this.yposition - this.side,
           this.xposition + this.side,
           this.xposition+this.dif )
      //line(this.xposition - this.side,this.xposition - this.side + this.side*2,this.xposition + this.side,this.xposition - this.side + this.side*2)
      arc(this.xposition,this.yposition+this.dif,2*this.side,2*this.side,0,PI);
    }
  }
rope(){
let anchor1 = createVector(this.xposition - this.side,
         this.yposition - this.side, 0); // First anchor point
  let anchor2 = createVector(this.xposition + this.side,
           this.yposition - this.side, 0); // Second anchor point
  gravity[i]= this.side/8;
  rope.push( new Rope(anchor1, anchor2, ropeLength));
rope[i].update();
  rope[i].display();
  i++;
  print(rope);
}
}


function setup() {

  createCanvas(windowWidth, windowHeight);
  background(180);

  //let anchor1 = createVector(-100, -200, 0); // First anchor point
  //let anchor2 = createVector(100, -200, 0); // Second anchor point
  //rope.push( new Rope(anchor1, anchor2, ropeLength));
  
  
  
dim = windowHeight/15;

  for (let i=0; i<20; i++){
    rotation[0].push(PI/2.2);
    rotation[1].push(PI/2.2);
    ration[0].push(0.7);
    ration[1].push(0.6);
    ration[2].push(0.6);
//ration[1][1] = 0.5;
  }
  
  
  translate (width/2,height/2-20);
  scale(1,-1);
  //church(rep,dim,ration[0][rep+1],dmin);
  
  background(180,200);
  
}

function church(rep,dim,ratio){
  if (dim>d){
    rep++;
  repnew = rep;
    
    push();
    strokeWeight(5);
    translate(0,dim+dim*ratio+difa);
   //point(0,0);
    
    
    stroke(250);
    if (dim<dmin + dminoffset){
      
   modules[0] = (new cube(0,0,dim,ratio,1,difa*ratio,k));
    modules[0].render();
    if(dim>10){
      if(gaudi==1){
    modules[0].rope();
      }
  }
    }
  repnew = rep;
  tails[rep-1] = dim;
  church(rep,dim*ration[0][rep],ration[0][rep+1]);
    pop();
    
    
    
    push();
    strokeWeight(5);
    translate(-2*ratio*dim*incerment-difb*ratio,dim-ratio*dim);
    rotate(rotation[0][rep]);
    
  //point(0,0);
  stroke(0);
  if (dim<dmin + dminoffset){  
  modules[1] = (new cube(0,0,dim,ratio,2,difb*ratio,k,rep));
    modules[1].render();
  } else if(k == rep){
modules[1] = (new cube(0,0,dim,ratio,2,difb*ratio,k,rep));
    modules[1].render();
  }
  
    repnew = rep;
    side[rep-1] = dim;
  church(rep,dim*ration[1][rep]*1,ration[1][rep+1]);
    pop();
    
    
    push();
    strokeWeight(5);
    translate(2*ratio*dim*incerment+difc*ratio,dim-ratio*dim);
    rotate(-rotation[1][rep]);
  
    //point(0,0);
    stroke(0);
    if (dim<dmin + dminoffset){
    modules[2] = (new cube(0,0,dim,ratio,3,difc*ratio,k,rep));
    modules[2].render();
    }else if(k == rep){
modules[2] = (new cube(0,0,dim,ratio,2,difb*ratio,k,rep));
    modules[2].render();
  }
  
    repnew = rep;
    
  church(rep,dim*ration[2][rep],ration[2][rep+1]);
    pop();
  }

}






function draw() {
  background(220);
  table();
  axonometric();
  //translate (width/2,height+20);
  scale(1,-1);
  //church(1,30,0.5,100);
  
  translate (width/2.3,-height/2+10);
  rotate(-PI/2);
  strokeWeight(5);
  //point(0,0);

  church(rep,dim,ration[0][rep+1],dmin);

  sculpt();
  tail();
  network();
  rat = network();
  //table();

 
  rotate(theta);
  //axonometric();
  theta += PI/180;

  //ration[0].splice(repnew,ration[0].length);
  tails.splice(repnew,tails.length);
  dminoffset = tails[tails.length-3];
  if(stop == 1){
    stop = 0;
  }
  sum = 0;

  
  
  if (gaudi===1){
    push();
    createCanvas(windowWidth,windowHeight,WEBGL)
    rect(10,10,10,10)
    background(200);
    
  orbitControl(); // Allows mouse control for orbiting the view
    rotateX(PI/7);
    translate(0,-height/10,0);
    //rotateY(-PI/10);
    rotateZ(theta);
    church(rep,dim-10,ration[0][rep+1],dmin);
    theta += 0.02;
    i=0;
    pop();
  }
  //text("hello world",50,50);
}






//Χρήσεις προγράμμτος manual
function sculpt(){
  if(gaudi==0){
if (go === 1){
  //ration[0][2] =  0.3;
  //ration[1][2] = 0.2;
  ration[1][k] = map(mouseX,0,width,0.3,0.8)
  ration[2][k] = map(mouseX,0,width,0.3,0.8)
  rotation[0][k] = map(mouseY,0,height,PI/1.3,PI/2.9)
  rotation[1][k] = map(mouseY,0,height,PI/1.3,PI/2.9)
}
  }
}






function keyPressed() {
  if(key === 'ArrowUp'){
  k++
}
  if (k>repnew+3){
  k = 1;
}
if(key === 'ArrowRight'){
  //network();
  print(stop);
    if(network()<1){
for(let i=0; i<10; i++){
    ration[0][1] = ration[0][1] + 0.04;
rotation[0][1] = rotation[0][1] + PI/10;
rotation[0][1] = rotation[0][1] - PI/10;

ration[1][1] -= 0.01;
ration[2][1] -= 0.01;
}
}
}
  
  if(key === 'ArrowLeft'){
    print("hey");
    gaudi = 1;
  }
}
  






function mousePressed(){
 go = 1;
}

function mouseReleased(){
  go = 0;
}






//Πρόγραμμα επεξεργασίας της πίσω μεριάς (αψίδας??)
function tail(){
  //ration[1][2]= ration[1][1]
  //ration[2][2]= ration[1][1]
    for (let k=0; k<repnew; k++){
      

      ration[0][1] = map(rotation[0][1],PI/1.3,PI/2.9,0.7,0.95);
      ration[0][2] = map(rotation[0][1],PI/1.3,PI/2.9,0.7,0.95) - 0.2;
      for (let i=3; i<repnew; i++){
        ration[0][i] = 0.9 + k*0.01;
      }
      network();

    }
}






//Πολύ απλό neural network για να αναγνωρίσει το πρόγραμμα την αναλογία του κτίσματος.
function network(){
let rotation1 = map(rotation[0][1],PI/1.3,PI/2.9,0.1,1);

let ratio01 = (ration[0][1],0.3,0.8,0.1,1);
let ratio02 = (ration[0][2],0.3,0.8,0.1,1);
let ratio11 = (ration[1][0],0.3,0.8,0.1,1);
let ratio12 = (ration[1][1],0.3,0.8,0.1,1);



let wid = rotation1*1 + ratio01*2.7 + ratio02*1.6 + ratio11*1 + ratio12*1.3
let heigh = rotation1*1.1 + ratio01*0.8 + ratio02*0.8 + ratio11*3.45 + ratio12*1.5

scale(1,-1);
rotate(-PI/2);
translate(-width/3.4,-240);
if (wid>heigh){
  textSize(102);
  //text("width", 50, 50);
stop = 1;
}else{
//text("height", 50, 50);
//ration[0][1] -= 0.05;
}
return(wid/heigh);
}






function table(){
  let Numratio = repnew + ration[1].length;
  let Numrotatio = rotation[0].length;
//text(Numratio,0,0);
point(0,0);

for(let i=0; i<Numratio; i++){
  textSize(10);
  push();
  noFill();
  strokeWeight(1);
  rect(0,10,(repnew-1)*(windowHeight/Numratio)+60,(repnew-1)*(windowHeight/Numratio)+5)
  rect((repnew-1)*(windowHeight/Numratio)+65,10,(repnew-1)*(windowHeight/Numratio)+60,(repnew-1)*(windowHeight/Numratio)+5)
  pop();
  push();
  noFill();
  strokeWeight(1);
  rect(0,(repnew-1)*(windowHeight/Numratio)+5,(repnew-1)*(windowHeight/Numratio)+60,windowHeight -  (repnew-1)*(windowHeight/Numratio)+5);
  rect((repnew-1)*(windowHeight/Numratio)+65,
    (repnew-1)*(windowHeight/Numratio)+5,
    (repnew-1)*(windowHeight/Numratio)+60,
    windowHeight -  (repnew-1)*(windowHeight/Numratio)+5);
  pop();


  if(i<repnew){
    text("ration0_" + i + ":   " + ration[0][i],0,i*(windowHeight/Numratio));
    if (rat>1){
      textSize(50);
text("width" ,(repnew-1)*(windowHeight/Numratio)+((repnew-1)*(windowHeight/Numratio)+30)/2,((repnew-1)*(windowHeight/Numratio))/1.5)
    }else{
      textSize(50);
text("height",(repnew-1)*(windowHeight/Numratio)+((repnew-1)*(windowHeight/Numratio)+30)/2,((repnew-1)*(windowHeight/Numratio))/1.5)
    }
  }else{
  text("ration1_" + (i-repnew+1) + ":   " + ration[1][i-repnew+1],0,(i)*(windowHeight/Numratio));
  text("rotation0_" + (i-repnew+1) + ":   " + rotation[0][i-repnew+1],(repnew-1)*(windowHeight/Numratio)+70,i*(windowHeight/Numratio));
}


}
for(let i=0; i<Numrotatio; i++){
  textSize(10);
  //text(Numrotatio,40,i*((windowHeight/2)/Numrotatio));
}
}






function axonometric(){
  push();
translate(windowWidth*0.84,windowHeight*0.7);
rotate(PI);
point(0,0);
theta += 0.1;
push();
rotate(PI/4);
stroke(100);
line(0,0,0,dim*2*abs(cos(theta)));
pop();
line(0,0,0,dim*4*abs(cos(theta)));
scale(1,0.5);
church(rep,dim-20,ration[0][rep+1],dmin);

  pop();
}



class Rope {
  constructor(anchor1, anchor2, numSegments) {
    this.anchor1 = anchor1;
    this.anchor2 = anchor2;
    this.segments = [];
    for (let i = 0; i < numSegments; i++) {
      let t = i / (numSegments - 1);
      this.segments.push(p5.Vector.lerp(anchor1, anchor2, t));
    }
  }

  update() {
    // Apply gravity to each segment except the first and last ones (the anchors)
    for (let i = 1; i < this.segments.length - 1; i++) {
      this.segments[i].y += gravity[i]; // Gravity
    }
    
    // Constrain segments to follow each other
    for (let i = 0; i < 50; i++) { // Iterating multiple times for stability
      for (let j = 1; j < this.segments.length; j++) {
        let prev = this.segments[j - 1];
        let curr = this.segments[j];
        let dir = p5.Vector.sub(curr, prev);
        let distance = dir.mag();
        let difference = segmentLength - distance;
        dir.normalize();
        dir.mult(difference / 2);
        if (j != 1) {
          prev.sub(dir);
        }
        if (j != this.segments.length - 1) {
          curr.add(dir);
        }
      }
    }

    // Ensure the end segments are at their anchor points
    this.segments[0] = this.anchor1.copy();
    this.segments[this.segments.length - 1] = this.anchor2.copy();
  }

  display() {
    stroke("red");
    fill(0);
    beginShape(LINES);
    for (let i = 0; i < this.segments.length - 1; i++) {
      vertex(this.segments[i].x, this.segments[i].z, this.segments[i].y + 10);
      vertex(this.segments[i + 1].x, this.segments[i + 1].z, this.segments[i + 1].y + 10);
    }
    endShape();
  }
}