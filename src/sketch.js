var numWhiteKeys = 7;
var numBlackKeys = 5;
var keyLoc = 10;
var keys = [];

function setup() {
  createCanvas(1024, 720);
  for (let i = 0; i < numWhiteKeys; i++) {
    let newKey = createDiv();
    newKey.style('position', 'absolute');
    newKey.style('top', '209px')
    newKey.style('left', String(19 + (i*51)) + 'px')
    newKey.style('z-index', 1)
    newKey.style('height', '200px')
    newKey.style('width', '50px')
    keys.push(newKey);
  }

  for (let i = 0; i < numWhiteKeys; i++) {
    let newKey = createDiv();
    newKey.style('position', 'absolute');
    newKey.style('top', '209px')
    newKey.style('left', String(53 + (i*51)) + 'px')
    newKey.style('z-index', 1)
    newKey.style('height', '100px')
    newKey.style('width', '31px')
    keys.push(newKey);
  }
}

function draw() {
  background(215);
  for (let i = 0; i < numWhiteKeys; i++) {
    fill('white')
    rect(10 + (i*51), 200, 50, 200);
  }

  for (let i = 0; i < numWhiteKeys; i++) {
    fill('black')
    if (!(i == 2 || i > numBlackKeys)) {
      rect(45 + (i*51), 200, 30, 100);
    }
  }
}
