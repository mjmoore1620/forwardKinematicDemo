let tentacle;

let segmentCount;

let topRange;
let bottomRange;
let bottomPhaseOffset;
let topCenter;
let bottomCenter;

function setup() {
	createCanvas(800, 600);
	background(51);

	//initialize linkage system
	tentacle = new fkSystem(width / 2, height);
	tentacle.speed = .03;
	segmentCount = 150;

	// add segments
	tentacle.add(4,  -1 * Math.PI / 2, random(-1 * Math.PI / 20, Math.PI / 20), random(Math.PI));
	for (let i = 0; i < segmentCount; i++) {
		tentacle.add(2, 0, random(-1 * Math.PI, Math.PI) / (segmentCount / 15), random(Math.PI));
	}
}

function draw() {
	background(51);

	tentacle.show();
}