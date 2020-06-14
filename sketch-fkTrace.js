var fk;
var angle;
var lastarm;
var color = "#000000";

window.onload = function () {


    document.body.style.backgroundColor = "black";

    var canvas1 = document.getElementById("canvas1"),
        context1 = canvas1.getContext("2d"),
        context2 = canvas2.getContext("2d"),
        width = canvas1.width = canvas2.width = 800,
        height = canvas1.height = canvas2.height = 600;

    fk = new fkSystem(width / 2, height / 2);
    fk.speed = .04;

    fk.add(100, 0, 0, 0);
    fk.add(50, 0, 0, 0);
    fk.add(75, 0, 0, 0);
    fk.add(100, 0, 0, 0);

    fk.arms[1].angle = 1.3;
    fk.arms[2].angle = -2;
    fk.arms[3].angle = 12;

    fk.arms[0].usePhase = false;
    fk.arms[1].usePhase = false;
    fk.arms[2].usePhase = false;
    fk.arms[3].usePhase = false;

    lastarm = fk.arms[fk.arms.length - 1];

    fk.arms[0].angle = Math.sin(fk.phase) * 1.2;
    fk.arms[1].angle = Math.cos(fk.phase * -.39) * .92;
    fk.arms[2].angle = fk.phase;
    fk.arms[3].angle = fk.phase * -3;
    fk.show(context1);

    context2.lineWidth = .25;
    draw();

    function draw() {
        console.log('hiya');

        context2.beginPath();
        context2.moveTo(lastarm.getEndX(), lastarm.getEndY());

        context1.clearRect(0, 0, width, height);
        fk.arms[0].angle = Math.sin(fk.phase) * 1.2;
        fk.arms[1].angle = Math.cos(fk.phase * -.39) * .92;
        fk.arms[2].angle = fk.phase;
        fk.arms[3].angle = fk.phase * -3;

        fk.show(context1);

        if (color == "#ffffff") {
            color = "#000000";
        }
        color = incrementColor(color, 12);

        context2.lineTo(lastarm.getEndX(), lastarm.getEndY());
        context2.strokeStyle = color;
        context2.stroke();

        requestAnimationFrame(draw);
    }
}

/**
 * https://stackoverflow.com/questions/12934720/how-to-increment-decrement-hex-color-values-with-javascript-jquery
 */
incrementColor = function (color, step) {
    var colorToInt = parseInt(color.substr(1), 16),                     // Convert HEX color to integer
        nstep = parseInt(step);                                         // Convert step to integer
    if (!isNaN(colorToInt) && !isNaN(nstep)) {                            // Make sure that color has been converted to integer
        colorToInt += nstep;                                            // Increment integer with step
        var ncolor = colorToInt.toString(16);                           // Convert back integer to HEX
        ncolor = '#' + (new Array(7 - ncolor.length).join(0)) + ncolor;   // Left pad "0" to make HEX look like a color
        if (/^#[0-9a-f]{6}$/i.test(ncolor)) {                             // Make sure that HEX is a valid color
            return ncolor;
        }
    }
    return color;
}
