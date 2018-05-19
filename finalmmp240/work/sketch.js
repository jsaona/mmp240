var cloud1X;
var cloud1Y;
var cloud2X;
var cloud2Y;
var cloud3X;
var cloud3Y;

function setup() {
    createCanvas(700, 650);
    design();
}

function design() {
    background(80, 180, 205);
    stroke(0);
    strokeWeight();



    var columnSize = width / 9;
    var rowSize = height / 9;
    for (var x = 50; x <= width; x += columnSize) {
        for (var y = 50; y <= height; y += rowSize) {

            fill("yellow");
            ellipse(x, y, 35, 35);
            cloud(x, y);
        }
    }
}

function cloud(cloudX, cloudY) {
    stroke("rgba(255, 255, 255, 0.8)");
    fill("rgba(255, 255, 255, 0.8)");
    ellipse(cloudX + random(5, 25), cloudY + 10, 50, 45);
    ellipse(cloudX + random(5, 40), cloudY + 10, 60, 30);
    ellipse(cloudX + random(0, 25), cloudY + 10, 30, 20);
    ellipse(cloudX + random(0, 35), cloudY + 20, 30, 20);
    ellipse(cloudX + random(0, 40), cloudY + 20, 40, 30);
}

function mousePressed() {
    design();


}
