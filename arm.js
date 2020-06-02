class Arm {
    constructor(x = 0, y = 0, length = 100, angle = 0) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.angle = angle;
        this.parent = null;
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

    show() {
        this.update();
        stroke(255);
        line(this.x, this.y, this.getEndX(), this.getEndY());
    }

}