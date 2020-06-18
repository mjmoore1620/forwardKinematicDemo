let tentacle;

let segmentCount;

let topRange;
let bottomRange;
let bottomPhaseOffset;
let topCenter;
let bottomCenter;

window.onload = function () {
    document.body.style.backgroundColor = "white";

    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = 800,
        height = canvas.height = 600;

    //initialize linkage system
    tentacle = new fkSystem(width / 2, height / 2);
    tentacle.speed = .004;
    segmentCount = 16;

    // add segments
    tentacle.add(200, 0, 0, 0);
    tentacle.arms[0].usePhase = false;
    for (let i = 1; i < segmentCount; i++) {
        tentacle.add(200, 0, 0, 0);
        tentacle.arms[i].usePhase = false;
    }

    draw();

    function draw() {
        context.clearRect(0, 0, width, height);

        tentacle.arms.forEach(arm => {
            arm.angle = tentacle.phase;
        });

        tentacle.show(context);

        requestAnimationFrame(draw);
    }
}

function getRnd(min, max) {
    return (Math.random() * (max - min)) + min;
}
