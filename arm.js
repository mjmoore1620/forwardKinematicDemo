class Arm {
    constructor(length = 100, angle = 0) {
        this.x = 0;
        this.y = 0;
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