let leg1, leg2;

let topRange;
let bottomRange;
let bottomPhaseOffset;
let topCenter;
let bottomCenter;

function setup() {
	createCanvas(800, 600);
	background(51);

	topCenter = createSlider(0, Math.PI, Math.PI / 2, .2);
	topRange = createSlider(0, Math.PI / 2, Math.PI / 4, .1);

	bottomCenter = createSlider(0, Math.PI, Math.PI / 3, .2);
	bottomRange = createSlider(0, Math.PI / 2, Math.PI / 4, .1);

	bottomPhaseOffset = createSlider(-5, 5, -1.5, .25);

	leg1 = new fkSystem(width / 2, height / 2);
	leg2 = new fkSystem(width / 2, height / 2);

	leg2.phase = Math.PI;

	leg1.add(100, Math.PI / 2 + .1, Math.PI / 4);
	leg1.add(80, Math.PI / 3, Math.PI / 5, -1.5);
	leg2.add(100, Math.PI / 2 + .1, Math.PI / 4);
	leg2.add(80, Math.PI / 3, Math.PI / 5, -1.5);
}

function draw() {
	background(51);

	leg1.arms[0].centerAngle = topCenter.value();
	leg2.arms[0].centerAngle = topCenter.value();

	leg1.arms[0].rotationRange = topRange.value();
	leg2.arms[0].rotationRange = topRange.value();

	leg1.arms[1].centerAngle = bottomCenter.value();
	leg2.arms[1].centerAngle = bottomCenter.value();

	leg1.arms[1].rotationRange = bottomRange.value();
	leg2.arms[1].rotationRange = bottomRange.value();

	leg1.arms[1].phaseOffset = bottomPhaseOffset.value();
	leg2.arms[1].phaseOffset = bottomPhaseOffset.value();

	leg1.show();
	leg2.show();
}