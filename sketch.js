let angle = 0;
let angle1 = 0;

function setup() {
  createCanvas(600,600,WEBGL);

}

function draw() {
  background(0);
  ambientLight(255,255,255,0,0,-1);
  stroke(0);
  strokeWeight(1);
  rectMode(CENTER);
  let swing = map(sin(angle1),-1,1,-65,-125);
  let swing1 = map(sin(angle1 /2),-1,1, -20, 20);
  rotateX(radians(swing));
  //rotateZ(radians(swing1));
  for(let i = 20; i > 0; i -= 1){
    let bright = map(sin(angle1),-1,1,0,255);
    let bright1 = map(i,0,20,255,0);
    ambientMaterial(bright1, 0, bright);
    //normalMaterial();
    rotateY(angle);
    translate(0,-i,0);
    box(10 * i, 2 * i, 10 * i);
  }
  angle -= 0.007;
  angle1 -= 0.01;
}
