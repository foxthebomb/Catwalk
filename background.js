class Background{

constructor(){

this.elements = [];

this.elements.push(new Sprite("sky_layer",0,0,0.2));
this.elements.push(new Sprite("water_layer", 0,0,.5));
this.elements.push(new Sprite("city_layer",0,0,0.3));
this.elements.push(new Sprite("bridge_layer",0,0,.4));
this.elements.push(new Sprite("road_layer",0,0,1, true));

}

changeSpeed(speed){
	for (let ele of this.elements){
		ele.speed *= speed;
	}
}

reset(){
	for (let sprite of this.elements){
		sprite.reset();
	}
}

show(){
background(255);

for (let i = 0; i<this.elements.length; i++){
	this.elements[i].move();
	this.elements[i].show();
}
}
}