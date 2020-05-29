class EnemyController{

constructor(){
	this.timer = 0;
	this.minTime = 60;
	this.randDelay = random(50);
	this.pigeons = [];
	this.cans = [];
	this.speed = 1;
	this.populate();
}

populate(){
		for (let i = 0; i < 10; i++){
		this.cans.push(new Enemy("can"));
}
	for (let i = 0; i < 10; i++){
		this.pigeons.push(new Enemy("pigeon"));
}

}

reset(){
	for (let can of this.cans){
		can.sprite.remove();
	}
		this.cans = [];
	for (let pigeon of this.pigeons){
		pigeon.sprite.remove();
	}
		this.pigeons = [];
	this.populate();
	this.speed = 1;
}


spawnEnemy(){
	let xOff=30;
	let choice = random(1);
		if(choice > 0.15){
			let spawnAmt = floor(random(1, 4));
			for (let i = 0; i < spawnAmt; i++){
				let enemy = this.cans[0];
				this.cans.shift();
				enemy.setup(xOff, 340, this.speed);
				this.cans.push(enemy);
				xOff+=30;
			}
		}
			else{
				let enemy = this.pigeons[0];
				this.pigeons.shift();
				enemy.setup(0, random(200, 350), this.speed);
				this.pigeons.push(enemy);
			}
			this.speed += 0.002;
}

getEnemies(){
	return this.cans.concat(this.pigeons);
}

update(){
	this.timer++;
	if (this.timer > this.minTime + this.randDelay){
		this.spawnEnemy();
		this.randDelay = random(50);
		this.timer = 0;
	}
	for (let enemy of this.cans.concat(this.pigeons)){
		enemy.move();
		enemy.show();
	}
}

}