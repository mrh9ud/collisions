class Ground extends Box {
    constructor(x, y, w, h) {
        super(x - 10, y - 10, w, h)
        this.body.isStatic = true
    }
}