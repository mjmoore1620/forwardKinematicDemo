let arm1, arm2;
let fk;

let angle;

function setup() {
	createCanvas(800, 600);
	background(51);

	fk = new fkSystem(width / 2, height / 2);

	fk.add(new Arm(25, 0));
	fk.add(new Arm(50, 1.3));
	fk.add(new Arm(75, -2));
	fk.add(new Arm(100, 12));
	
	angle = 0;
}

function draw() {
	background(51);
	fk.arms[0].angle = Math.sin(angle) * 1.2;
	fk.arms[1].angle = Math.cos(angle * -.39) * .92;
	fk.arms[2].angle = angle;
	fk.arms[3].angle = angle * -3;

	angle += .02;

	fk.show();
}