let tentacle;
let segmentCount;
let segmentLen;
let taper;

let tentacleOffset;

window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = 800,
        height = canvas.height = 600;

    noise.seed(Math.random());

    /**
     * If there were more tentacles, using a unique offset for each one would result 
     * in perlin noise from different areas of the noise Map. I think.
     * Also, starting at 0 has an odd, but cool effect at the beginning of the animation.
     */
    tentacleOffset = 600;

    //initialize linkage system
    tentacle = new fkSystem(width / 2, height);
    tentacle.speed = .0004;
    segmentCount = 70;
    segmentLen = 30;

    taper = .93;

    // add segments
    // add the first to set the direction
    tentacle.add(1, 0, 0, 0);
    tentacle.arms[0].angle = Math.PI / 2 * -1;
    tentacle.arms[0].usePhase = false;

    // add the rest
    for (let i = 1; i < segmentCount; i++) {
        tentacle.add(segmentLen, 0, 0, 0);
        segmentLen = segmentLen * taper;
        tentacle.arms[i].usePhase = false;
    }

    tentacle.show(context);

    draw();

    function draw() {
        context.clearRect(0, 0, width, height);
        
        for (let i = segmentCount - 1; i >= 1; i--) {
            let angle = noise.perlin2((tentacle.phase + tentacleOffset) * i, (tentacle.phase + tentacleOffset) * i);
            //console.log(angle);
            
            tentacle.arms[i].angle = angle;
        }
        //// Other settings for applying the noise
        // for (let i = 1; i < tentacle.arms.length; i++){
        //     tentacle.arms[i].angle = noise.perlin2((tentacle.phase + 0) * tentacle.arms[i].length, (tentacle.phase + 0) * tentacle.arms[i].length);
        // }

        // for (let i = segmentCount - 1; i >= 1; i--) {
        //     tentacle.arms[i].angle = noise.perlin2((tentacle.phase + 0) * tentacle.arms[i].length, (tentacle.phase + 0) * tentacle.arms[i].length);
        // }

        tentacle.show(context);

        requestAnimationFrame(draw);
    }
}

function getRnd(min, max) {
    return (Math.random() * (max - min)) + min;
}
