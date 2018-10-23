var mySong;
var mySong2;

var analyzer;
var analyzer2;

var myImage;

var myColors = ['#D4AFB9',
  '#D1CFE2',
  '#9CADCE',
  '#7EC4CF',
  '#52B2CF'
];

var botton;
var bottonP;
// var bottonM;

function preload() {
  // myImage = loadImage('./assets/1.jpg');
  mySong = loadSound('./assets/A_A_Aalto_-_Focus.mp3');
  // mySong2 = loadSound('./assets/Podington_Bear_-_Lost_And_Found.mp3');
  myImage = loadImage('./assets/17.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  mySong.play();
  // mySong2.play();

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

  // analyzer2 = new p5.Amplitude();
  // analyzer.setInput(mySong2);
  // myImage.filter('posterize', 3);

  // textSize(size);
  // textAlign(CENTER)
  // textFont('Cormorant');
  botton = new Botton(width / 2 + 4, height * 4 / 5 - 25, 30);
  bottonP = new BottonP(width / 2 - 20, height * 4 / 5 - 25, 30);
  // bottonM = new BottonM(width / 2 - 20, height / 5 - 25, 30);
}

function draw() {
  background(color(myColors[2]));
  botton.display(mouseX, mouseY);
  bottonP.display(mouseX, mouseY);
  // bottonM.display(mouseX, mouseY);

  image(myImage, 0, 0, windowWidth, windowHeight);

  // display
  rectMode(CENTER);
  noStroke();
  fill('#D4AFB9');
  rect(width / 2, height / 3.3, width / 4.5, height / 3.9);

  // play botton
  fill(66, 66, 66);
  var playbotton = triangle(width / 2 - 28, height * 4 / 5 - 15, width / 2 - 28, height * 4 / 5 - 35, width / 2 - 8, height * 4 / 5 - 25);

  // stop botton
  rect(width / 2 + 2, height * 4 / 5 - 25, 5, 20);
  rect(width / 2 + 10, height * 4 / 5 - 25, 5, 20);
  var volume = analyzer.getLevel();
  console.log(volume);
  //  graphic
  ellipse(width / 2, height / 3, volume * 100);
  noFill();
  stroke(66, 66, 66);
  strokeWeight(2);
  bezier(width / 2, height / 3, volume * 100, volume * 10, width / 2, height / 3, volume, volume * 1000);
  strokeWeight(1);
  stroke('#7EC4CF');
  bezier(width / 2, height / 3, volume * 1000, volume * 10, volume * 100, volume, 1000 * volume * 10, height / 4);
  strokeWeight(2);
  stroke('#D1CFE2');
  bezier(width / 2, height / 3, volume * 5000, volume * 0.5, volume * 100, volume, 1000 * volume * 10, height);
  stroke(66, 66, 66);
  bezier(width / 2, height / 3, volume*100, volume * 5, volume * 10, volume, width, height);

  push();
  textSize(50+volume*10);
  textStyle('bold')
    textFont('Cormorant')
    noStroke()
    fill('white')
  text('Play / Pause the song ', windowWidth/2.7,windowHeight/10);
  pop();
}

function mousePressed() {

  if (bottonP.contains(mouseX, mouseY)) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    } else {
      mySong.pause();
    }

  }

}

var Botton = function(x_, y_, r_) {
  // Location and size
  var x = x_;
  var y = y_;
  var r = r_;


  this.contains = function(mx, my) {
    if (dist(mx, my, x, y) < r) {
      return true;
    } else {
      return false;
    }
  };
  this.display = function(mx, my) {
    fill('#9CADCE');
    noStroke();
    ellipse(x, y, r, r);
  };
};


var BottonP = function(x_, y_, r_) {
  // Location and size
  var x = x_;
  var y = y_;
  var r = r_;


  this.contains = function(mx, my) {
    if (dist(mx, my, x, y) < r) {
      return true;
    } else {
      return false;
    }
  };
  this.display = function(mx, my) {
    fill('black');
    noStroke();
    ellipse(x, y, r, r);
  };
};


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
