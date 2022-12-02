var wave;
var button;
var playing=false;
var ampValue=0;

function setup(){
  createCanvas(720, 256);
  wave = new p5.Oscillator();
  wave.setType('sine');
  //wave.start();
  wave.freq(440);
  wave.amp(0.1);
  
button =createButton('play/pause');
button.mousePressed(toggle);
}
let r, g, b;
function setup(){
  createCanvas(displayWidth, displayHeight);
  r= random(50, 255);
  g= random(0, 200);
  b=random(50, 255);
}

function draw(){
  background(r, g, b);
  console.log('draw');
  clear();
  let display=touches.length+'touches';
  text(display, 5, 10);
  //text(accelerationX+", "accelerationY",     "+accelerationZ);
}

function deviceMoved(){
  
  r= map(accelerationX, -90, 90, 100, 175);
  g= map(accelerationY, -90, 90, 100, 200);
  b= map(accelerationZ, -90, 90, 100, 200);
}
function toggle(){
  if(!playing){
wave.start();
    wave.amp(ampValue, 1);
    playing = true;
  }else{
    wave.amp(0,1);
    playing = false;
  }
}

