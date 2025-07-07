let number = 0;

let GREY = 'rgb(130)';
let RED = 'rgb(255, 0, 0)';
let ORANGE = 'rgb(252, 169, 3)';
let YELLOW = 'rgb(255, 255, 0)';
let GREEN = 'rgb(0, 255, 0)';
let BLUE = 'rgb(3, 227, 252)';
let PURPLE = 'rgb(107, 3, 252)';
let RAINBOW = 'rgb(0)';
let PINK = 'rgb(209, 79, 194)';
let GRAY9 = 'rgb(150)';
let WHITE = 'rgb(255)';

let COLORS = [WHITE, RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE, RAINBOW, PINK, GRAY9, WHITE ];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0);
  text(number, width/2, height/2);
  console.log(COLORS);
}

function draw() {
  background(150);
  drawRectangles();
  fill(0);
  text(number, width/2, height/2);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    number = number + 1;
  }
  if (keyCode == DOWN_ARROW) {
    number = number - 1;
  }
}

function mousePressed() {
  number = number + 1;
}

function breakUpNumber(n) {
  let digits = [];
  if (n < 0) { n *= -1; }
  while (n > 0) {
    digits.push(n%10);
    n = int(n / 10);
  }
  digits = digits.toReversed();
  //re-assign 0s
  for (let d=0; d < digits.length; d++) {
    if (digits[d] == 0) {
      digits[d] = digits[d-1];
    }
    else if (d == digits.length-2 && digits[d] == 1) {
      digits[d] = 0;
    }
  }
  return digits;
}//breakUpNumber

function drawRectangles() {
  let digits = breakUpNumber(number);
  for (let d=0; d < digits.length; d++) {
    fill(color(COLORS[digits[d]]));
    rect(0, d*height/digits.length, width, height/digits.length);

    //find consecutive 7s
    if (digits[d] == 7) {
      let rainbow_start = d * height/digits.length;
      d++;
      let sevenSize = 1;
      while (d < digits.length && digits[d] == 7) {
        d++;
        sevenSize++;
      }
      draw_rainbow(rainbow_start, rainbow_start+(sevenSize*height/digits.length));
      d--;
    }
  }//loop over digits
}

function draw_rainbow(starty, endy) {
  c = color(255, 0, 0);
  rainbowSize = endy-starty;
  for (let y = starty; y<endy; y++) {
    stroke(c);
    line(0, y, width, y);
    if (y <= rainbowSize/(7) + starty) {
      c = color(255, 0, 0);
    }
    else if (y <= 2*rainbowSize/(7) + starty) {
      c = color(252, 169, 3);
    }//orange
    else if (y <= 3*rainbowSize/(7) + starty) {
      c = color(255, 255, 0);
    }//yellow
    else if (y <= 4*rainbowSize/(7) + starty) {
      c = color(0, 255, 0);
    }//green
    else if (y <= 5*rainbowSize/(7) + starty) {
      c = color(3, 227, 252);
    }//blue
    else if (y <= 6*rainbowSize/(7) + starty) {
      c = color(107, 3, 252);
    }//indigo
    else {
      c = color(189, 167, 219);
    }
  }//draw lines
}
