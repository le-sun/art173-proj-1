var numWhiteKeys = 7;
var numBlackKeys = 5;
var keyLoc = 10;
var naturalKeyNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
var sounds = [];
var keys = [];

class Key {
  constructor(height, width, top, left, zIndex, soundIndex) {
    this.styles = [
      ['position', 'absolute'],
      ['height', height],
      ['width', width],
      ['top', top],
      ['left', left],
      ['z-index', zIndex]
    ]
    this.soundIndex = soundIndex;
    let newKey = createDiv();
    this.styles.forEach((style) => {newKey.style(...style)})

    newKey.mouseClicked(() => {playSound(this.soundIndex)});
  }
}

function preload() {
  for (let i = 0; i < naturalKeyNames.length; i++) {
    sounds.push(loadSound(String('assets/reg-' + naturalKeyNames[i] + '.mp3')));

    if (i != 2 && i != 6) {
      // sounds.push(loadSound(String('assets/reg-' + naturalKeyNames[i] + '#.mp3')));
    }
  }
  console.log(sounds)
}

function setup() {
  createCanvas(1024, 720);
  for (let i = 0; i < numWhiteKeys; i++) {
    new Key('200px', '50px', '209px', String(19 + (i*51)) + 'px', 1, i);

    if (!(i == 2 || i > numBlackKeys)) {
      new Key('100px', '31px', '209px', String(53 + (i*51)) + 'px', 2, i + 7);
    }
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

function playSound(soundIndex) {
  sounds[i].play()
}
