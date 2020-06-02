let arm1, arm2;

let angle;

function setup() {
	createCanvas(800, 600);
	background(51);

	arm1 = new Arm(width / 2, height / 2, 25, 0);
	arm2 = new Arm(arm1.getEndX(), arm1.getEndY(), 50, 1.3);
	arm3 = new Arm(arm2.getEndX(), arm2.getEndY(), 75, -2);
	arm4 = new Arm(arm3.getEndX(), arm3.getEndY(), 100, 12);
	angle = 0;

	arm2.parent = arm1;
	arm3.parent = arm2;
	arm4.parent = arm3;
}

function draw() {
	background(51);
	arm1.angle = Math.sin(angle) * 1.2;
	arm2.angle = Math.cos(angle * -.39) * .92;
	arm3.angle = angle;
	arm4.angle = angle * -3;

	angle += .02;

	arm1.show();
	arm2.show();
	arm3.show();
	arm4.show();
}