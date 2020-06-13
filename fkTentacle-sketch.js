let tentacle;

let segmentCount;

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

    //initialize linkage system
    tentacle = new fkSystem(width / 2, height);
    tentacle.speed = .03;
    segmentCount = 150;

    // add segments
    tentacle.add(4, -1 * Math.PI / 2, getRnd(-1 * Math.PI / 20, Math.PI / 20), getRnd(0, Math.PI));
    for (let i = 0; i < segmentCount; i++) {
        tentacle.add(2, 0, getRnd(-1 * Math.PI, Math.PI) / (segmentCount / 15), getRnd(0, Math.PI));
    }

    draw();

    function draw() {
        context.clearRect(0, 0, width, height);
        tentacle.show(context);

        requestAnimationFrame(draw);
    }
}

function getRnd(min, max) {
    return (Math.random() * (max - min)) + min;
}
