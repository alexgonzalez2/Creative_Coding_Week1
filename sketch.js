function setup() {
  let mCanvas = createCanvas(windowWidth, windowHeight);
  mCanvas.parent("main");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}