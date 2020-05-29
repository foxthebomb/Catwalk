let player;
let bg;
let controller;
let pageX;
let enemies = [];
let gameLoop = false;
let screen;
let score = 0;
let jump;
let chime;

this.focus();

function preload(){
bg = new Background();
jump = loadSound('/games/run/resources/audio/jump.wav');
chime = loadSound('/games/run/resources/audio/chime.wav');
}

function setup(){
let canvas = createCanvas(400, 400);
pageX = (windowWidth - width)/2;
canvas.position(pageX, 0);
canvas.parent("pageContents");
frameRate(60);
bg.changeSpeed(2);
player = new Player(pageX+25, 400);
controller = new EnemyController();
screen = createImg(`/games/run/resources/title.png`, '');
screen.position(pageX, 0);
jump.setVolume(0.2);
chime.setVolume(0.5);
}

function keyPressed() {
  if (key == ' ') {
  	let action = gameLoop ? player.jump() : begin();
    //player.jump();
  }
}

function begin(){
	score = 0;
	gameLoop = true;
	bg.reset();

	screen.hide();
	screen.elt.src = `/games/run/resources/gameover.png`;
	loop();
}

function end(){
	gameLoop = false;
	controller.reset();
}

function drawScore(){
	fill(255, 255, 255);
	textSize(18);
	textAlign(RIGHT);
	text(`Score: ${nf(floor(score),6)}`, 395, 20);
}

function draw(){
bg.show();
drawScore();
if (gameLoop){
	score += 0.25;
	if (score % 500 == 0){
		chime.play();
	}
	controller.update();

	for (let enemy of controller.getEnemies()){
	if (player.collides(enemy)){
		end();
	}
}

player.move();
player.show();
}
else {
	screen.show();
	player.hide();
	noLoop();
}
}