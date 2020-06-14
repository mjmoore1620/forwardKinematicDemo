class Arm {
    constructor(length = 100, centerAngle = 0, rotationRange = Math.PI / 4, phaseOffset = 0) {
        this.x = 0;
        this.y = 0;
        this.length = length;
        this.angle = 0;
        this.centerAngle = centerAngle;
        this.rotationRange = rotationRange;
        this.parent = null;
        this.phaseOffset = phaseOffset;
        this.usePhase = true;
    }

    setPhase(phase) {
        this.angle = this.centerAngle + Math.sin(phase + this.phaseOffset) * this.rotationRange;
    }

    getEndX() {
        let angle = this.angle;
        let parent = this.parent;
        while (parent) {
            angle += parent.angle;
            parent = parent.parent;
        }
        return this.x + Math.cos(angle) * this.length;
    }

    getEndY() {
        let angle = this.angle;
        let parent = this.parent;
        while (parent) {
            angle += parent.angle;
            parent = parent.parent;
        }
        return this.y + Math.sin(angle) * this.length;
    }

    update() {
        if (this.parent != null) {
            this.x = this.parent.getEndX();
            this.y = this.parent.getEndY();
        }
    }

    show(context) {
        this.update();
        context.strokeStyle = "#000000";
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.getEndX(), this.getEndY());
        context.stroke();
    }

}