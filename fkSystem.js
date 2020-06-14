class fkSystem {
    constructor(baseX, baseY) {
        this.arms = [];
        this.baseX = baseX;
        this.baseY = baseY;
        this.phase = 0;
        this.speed = 0.07;
    }

    add(length, centerAngle, rotationRange, phaseOffset) {
        let arm = new Arm(length, centerAngle, rotationRange, phaseOffset);
        if (this.arms.length > 0) {
            arm.parent = this.arms[this.arms.length - 1];
            this.arms.push(arm);
        } else {
            arm.x = this.baseX;
            arm.y = this.baseY;
            this.arms.push(arm);
        }
    }

    rotateArm(index, angle) {
        this.arms[index].angle = angle;
    }

    show(context) {
        for (let i = 0; i < this.arms.length; i++) {
            if (this.arms[i].usePhase) {
                this.arms[i].setPhase(this.phase);
            }
            this.arms[i].show(context);
        }
        this.phase += this.speed;
    }
}