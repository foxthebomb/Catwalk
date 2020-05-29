class Enemy{
	constructor(src){
		this.x = 400+pageX;
		this.y = 0;
		this.groundLevel = this.y;
		this.sprite = createImg(`/resources/${src}.gif`, '');
		this.sprite.hide();
		this.initialSpeed = -5;
		this.vX = 0;
	}

setup(xOff, y, speedMult){
	this.x = 400+pageX+xOff;
	this.y = y;
	this.vX = this.initialSpeed * speedMult;
}

move(){
	this.x += this.vX;
}


show(){
	this.sprite.position(this.x, this.y);
		if(this.x <= windowWidth - pageX - this.sprite.width*.75 && this.x >= pageX - this.sprite.width*.3){
			this.sprite.show();
	}
	else if (this.x <= pageX) {
			this.vX = 0;
			this.x = -100;
			this.sprite.hide();

}
}
}
