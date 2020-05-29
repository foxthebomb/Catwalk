class Sprite{

constructor(name, x=0, y=0, speed, cycle=false){
	this.defaultLeft = loadImage(`/games/run/resources/${name}.png`);
	this.left = this.defaultLeft;
	this.right = loadImage(`/games/run/resources/${name}2.png`);
	this.width = 400;
	this.xL = x;
	this.xR = this.xL + this.width;
	this.y = y;
	this.baseSpeed = speed;
	this.speed = this.baseSpeed;
	this.cycle = cycle;
}

reset(){
	this.xL = 0;
	this.left = this.defaultLeft;
	this.xR = this.xL + this.width;
}

move(){
this.xL -= this.speed;
this.xR -= this.speed;

if (this.xL  < (-this.width)){
	this.xL = this.xR + this.width;
	if (!this.cycle){
	this.left = this.right;
		}
	else {
		this.left = random(1) <= 0.2 ? this.defaultLeft : this.right;
	}
}

if (this.xR  < (-this.width)){
	this.xR = this.xL + this.width;

}
}


show(){
image(this.left, this.xL, this.y);
image(this.right, this.xR, this.y);

}

}