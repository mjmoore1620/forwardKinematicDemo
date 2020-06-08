// let arm1, arm2;
// let fk;

// let angle;

// function setup() {
// 	createCanvas(800, 600);
// 	background(51);

// 	fk = new fkSystem(width / 2, height / 2);

// 	fk.add(new Arm(25, 0));
// 	fk.add(new Arm(50, 1.3));
// 	fk.add(new Arm(75, -2));
// 	fk.add(new Arm(100, 12));

// 	angle = 0;
// }

// function draw() {
// 	background(51);
// 	fk.arms[0].angle = Math.sin(angle) * 1.2;
// 	fk.arms[1].angle = Math.cos(angle * -.39) * .92;
// 	fk.arms[2].angle = angle;
// 	fk.arms[3].angle = angle * -3;

// 	angle += .02;

// 	fk.show();
// }



window.onload = function () {
	var fk;
	var angle;
	var lastarm;
	// document.body.style.backgroundColor = "red";
	
	var canvas1 = document.getElementById("canvas1"),
		context1 = canvas1.getContext("2d"),
		context2 = canvas2.getContext("2d"),
		width = canvas1.width = canvas2.width = 800,
		height = canvas1.height = canvas2.height = 600;

	fk = new fkSystem(width / 2, height / 2);

	fk.add(new Arm(100, 0));
	fk.add(new Arm(50, 1.3));
	fk.add(new Arm(75, -2));
	fk.add(new Arm(100, 12));

	lastarm = fk.arms[fk.arms.length - 1];

	angle = 0;
	
	fk.arms[0].angle = Math.sin(angle) * 1.2;
	fk.arms[1].angle = Math.cos(angle * -.39) * .92;
	fk.arms[2].angle = angle;
	fk.arms[3].angle = angle * -3;
	fk.show(context1);

	context2.lineWidth = .25;
	draw();

	function draw() {
		context2.beginPath();
		context2.moveTo(lastarm.getEndX(), lastarm.getEndY());

		context1.clearRect(0, 0, width, height);
		fk.arms[0].angle = Math.sin(angle) * 1.2;
		fk.arms[1].angle = Math.cos(angle * -.39) * .92;
		fk.arms[2].angle = angle;
		fk.arms[3].angle = angle * -3;

		angle += .02;

		fk.show(context1);

		context2.lineTo(lastarm.getEndX(), lastarm.getEndY());
		context2.stroke();

		requestAnimationFrame(draw);
	}
}

