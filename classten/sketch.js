var ball = [];
var img;
function preload() {
    img = loadImage('images/ball.png');
}

function setup() {
    createCanvas(800, 500);
     for (var i = 0; i < 10; i++) {
     ball.push(new Ball (random(350), random(300)));   
};
};

function draw() {
    background("black");
    for (var i = 0; i < ball.length; i++) {
        ball[i].move();
        ball[i].show();
    }
}
// Ball class
function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.show = function () {
        image(img, this.x, this.y, 80, 80);
    };

    this.move = function () {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    };
}
