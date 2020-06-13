let leg1, leg2;

let topRange;
let bottomRange;
let bottomPhaseOffset;
let topCenter;
let bottomCenter;

window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = 800,
		height = canvas.height = 600;
		
		document.getElementById('topCenter').value = 1.57;
        document.getElementById('topRange').value = 0.77;
        document.getElementById('bottomCenter').value = 0.87;
        document.getElementById('bottomRange').value = 0.87;
		document.getElementById('bottomPhase').value = 1.5;
		
    //initialize linkage system
    leg1 = new fkSystem(width / 2, height / 2);
    leg2 = new fkSystem(width / 2, height / 2);

    leg2.phase = Math.PI;

    leg1.add(100, Math.PI / 2 + .1, Math.PI / 4);
    leg1.add(80, Math.PI / 3, Math.PI / 5, -1.5);
    leg2.add(100, Math.PI / 2 + .1, Math.PI / 4);
    leg2.add(80, Math.PI / 3, Math.PI / 5, -1.5);

    draw();

    function draw() {
        context.clearRect(0, 0, width, height);
        leg1.show(context);
        leg2.show(context);

        requestAnimationFrame(draw);
    }

    document.getElementById("topCenter").addEventListener("input", function (input) {
        leg1.arms[0].centerAngle = parseFloat(this.value);
        leg2.arms[0].centerAngle = parseFloat(this.value);
    });

    document.getElementById("topRange").addEventListener("input", function (input) {
        leg1.arms[0].rotationRange = parseFloat(this.value);
        leg2.arms[0].rotationRange = parseFloat(this.value);
        
    });

    document.getElementById("bottomCenter").addEventListener("input", function (input) {
                leg1.arms[1].centerAngle = parseFloat(this.value);
                leg2.arms[1].centerAngle = parseFloat(this.value);
    });

    document.getElementById("bottomRange").addEventListener("input", function (input) {
        leg1.arms[1].rotationRange = parseFloat(this.value);
        leg2.arms[1].rotationRange = parseFloat(this.value);            
    });

    document.getElementById("bottomPhase").addEventListener("input", function (input) {
        leg1.arms[1].phaseOffset = parseFloat(this.value);
        leg2.arms[1].phaseOffset = parseFloat(this.value);            
    });
}
