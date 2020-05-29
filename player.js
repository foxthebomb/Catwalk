class Player{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.groundLevel = y;
		this.sprite = createImg(`/games/run/resources/cat3.gif`, '');
		this.gravity = 1;
		this.vY = 0;
		this.sprite.hide();
	}


jump(){
	if (this.y == height - this.sprite.height*1.25){
		this.vY = -15;
		this.sprite.src = `/games/run/resources/cat3.gif`;
		jump.play();
	}
}

collides(other){
	let x = this.x + this.sprite.height * 0.5;
	let y = this.y + this.sprite.height * 0.5;
	let oX = other.x + other.sprite.height * 0.5;
	let oY = other.y + other.sprite.height * 0.5;
	return collideCircleCircle(x, y, this.sprite.height*0.5, oX, oY, other.sprite.height*0.5);
}

hide(){
	this.sprite.hide();
}

move(){
	this.y += this.vY;
	this.vY += this.gravity;
	this.y = constrain(this.y, 0, height-this.sprite.height*1.25);
}


show(){
	this.sprite.show();
	this.sprite.position(this.x, this.y);
	if (this.vY < 0) 
		this.sprite.elt.src = `/games/run/resources/cat_jump.png`;
	if (this.vY > 10 && !this.sprite.elt.src.includes(`cat3.gif`)) {
		this.sprite.elt.src = `/games/run/resources/cat3.gif`;
	}
}
}