let container;
let ratio = 0.75; // 4:3 ratio

function setup() {
  container = document.getElementById('p5Sketch');
  const canvas = createCanvas(container.clientWidth, container.clientWidth * ratio);
  canvas.parent(container);

  
}

function draw() {
  background(220);

  const d = min(width, height) * 0.6;
  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01);
  noStroke();
  fill('#4f46e5');
  ellipse(0, 0, d, d);
  pop();
}

function windowResized() {
  const holder = document.getElementById('p5Sketch');
  resizeCanvas(holder.clientWidth, holder.clientWidth * ratio);
}
