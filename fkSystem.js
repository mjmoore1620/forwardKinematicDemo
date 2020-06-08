class fkSystem {
    constructor(baseX, baseY) {
        this.arms = [];
        this.baseX = baseX;
        this.baseY = baseY;
    }

    add(arm) {
        if (this.arms.length > 0) {
            arm.parent = this.arms[this.arms.length - 1];
            this.arms.push(arm);
        } else {
            arm.x = this.baseX;
            arm.y = this.baseY;
            this.arms.push(arm);
        }
    }

    show(context) {
        for (let i = 0; i < this.arms.length; i++) {
            this.arms[i].show(context);
        }
    }
}