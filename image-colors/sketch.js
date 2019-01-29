const BACKGROUND = "white";
const PADDING = 100;
let imageUrl = "https://images.unsplash.com/photo-1548636200-691c76f69390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
let input;
let button;
let img;

function setup() {
  createCanvas(windowHeight - PADDING, windowHeight - PADDING)
  noStroke(); // No outline stroke
  noLoop();
  input = createInput();
  input.position(20, 10);

  button = createButton('generate new art');
  button.position(input.x + input.width + 10, 10);
  button.mouseClicked(newArt);

}

function draw() {

  background(BACKGROUND);
  // image(img, 0, 0);
  img.loadPixels();
  const randomX = floor(random(0, img.width));

  push()
  for (let i = 0; i <= img.height; i++) {
    let pix = img.get(randomX, i);
    stroke(pix);
    line(0, i, img.width, i)
  }
  pop()

}

function preload() {
    console.log('image url',imageUrl)
  img = loadImage(imageUrl)
}

function getRandomFromArray(array) {
  const nb = array.length
  const rand = floor(random(nb))
  return array[rand]
}
function getBoolean() {
  return random(1) >= 0.5;
}
function newArt() {
  if(input.value() !== '') {
    imageUrl = input.value();
    input.value('');
    img = loadImage(imageUrl, newImageLoaded)
  } else {
      newImageLoaded()
  }
}

function newImageLoaded() {
  background(BACKGROUND);
  redraw();
}