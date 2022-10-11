var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount, gameState;

//1--form.js criar elementos de classe

function preload() {
  bgImg = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  
  game.getState();
  //adicionar função de estado
  game.start();
  

}

function draw() {
  background(bgImg)
  
  //adicionar condição de mudança de estado
  if (playerCount==2){

    game.update(1);

  }

  if (gameState==1){

    game.play();

  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
