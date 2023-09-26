class Rect {
    x;
    y;
    width;
    height;
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    permeter() {
        return (this.width + this.height) * 2;
    }
    acreage() {
        return this.width * this.height;
    }
    createRect() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
let rect = new Rect(0, 0, 300, 100);
rect.createRect();
document.write("Chu vi: " + rect.permeter() + " Diện tích: " + rect.acreage());
