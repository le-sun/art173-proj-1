const numWhiteKeys = 7;
const numBlackKeys = 5;
const topPos = 500;
const leftPosW = 335;
const leftPosB = 370;
const naturalKeyNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

var sounds = [];
var playedSounds = [];
var currentKeyIndex;
var keys = [];

class Key {
  constructor(height, width, top, left, zIndex, soundIndex, soundName) {
    this.styles = [
      ['position', 'absolute'],
      ['height', height],
      ['width', width],
      ['top', top],
      ['left', left],
      ['z-index', zIndex]
    ]
    this.soundIndex = soundIndex;
    this.name = soundName;sounds[soundIndex].file.slice(11, 12)

    let newKey = createDiv();
    this.styles.forEach((style) => {newKey.style(...style)})

    newKey.mouseClicked(() => {playSound(this.soundIndex, this.soundName)});
  }
}

function preload() {
  for (let i = 0; i < naturalKeyNames.length; i++) {
    sounds.push(loadSound(String('assets/reg-' + naturalKeyNames[i] + '.mp3')));

    if (i != 2 && i != 6) {
      sounds.push(loadSound(String('assets/reg-' + naturalKeyNames[i] + 'b' + '.mp3')));
    }
  }
  console.log(sounds)
}

function setup() {
  createCanvas(1024, 720);

  let leftPos = 0;
  for (let i = 0; i < sounds.length; i++) {
    let soundName = sounds[i].file.slice(11, 12);
    new Key('200px', '50px', topPos + 'px', String(leftPosW + (leftPos*51)) + 'px', 1, i, soundName);

    if (i != 4 && i != 11) {
      i += 1;
      soundName = sounds[i].file.slice(11, 12);
      new Key('100px', '31px', topPos + 'px', String(leftPosB + (leftPos*51)) + 'px', 2, i, soundName + '#');
    }
    leftPos += 1;
  }
}

function draw() {
  background(215);
  for (let i = 0; i < numWhiteKeys; i++) {
    fill('white')
    rect(leftPosW + (i*51), 500, 50, 200);
  }

  for (let i = 0; i < numWhiteKeys; i++) {
    fill('black')
    if (!(i == 2 || i > numBlackKeys)) {
      rect(leftPosB + (i*51), 500, 30, 100);
    }
  }
}

function playSound(soundIndex, soundName) {
  let sound = sounds[soundIndex];
  console.log(sound);
  sound.play();
}
