var bug; // declare my variable
var bug2;
var bug3;
var bug4;
var bug5;
var bug6;
var bug7;
var bug8;
var bug9;
var bug10;
var ball;


function preload() {
    ball = loadImage('images/ball.png');
}

function setup() {
    createCanvas(800, 500);
    // create objects
    
    bug = new Bug(100, 200);
    bug2 = new Bug(0, 0);
    bug3 = new Bug(10, 10);
    bug4 = new Bug(20, 30);
    bug5 = new Bug(30, 50);
    bug6 = new Bug(40, 60);
    bug7 = new Bug(50, 60);
    bug8 = new Bug(60, 70);
    bug9 = new Bug(70, 80);
    bug10 = new Bug(90, 100);
};

function draw() {
    background("black");

    var columnSize = width / 9;
    var rowSize = height / 9;
    for (var x = 5; x <= width; x += columnSize) {
        for (var y = 5; y <= height; y += rowSize) {

            bug.move();
            bug2.move();
            bug.show();
            bug2.show();
            
            bug.move();
            bug3.move();
            bug.show();
            bug3.show();
    
            bug.move();
            bug4.move();
            bug.show();
            bug4.show();
            
            bug.move();
            bug5.move();
            bug.show();
            bug5.show();
            
            bug.move();
            bug6.move();
            bug.show();
            bug6.show();
            
            bug.move();
            bug7.move();
            bug.show();
            bug7.show();
            
            bug.move();
            bug8.move();
            bug.show();
            bug8.show();
            
            bug.move();
            bug9.move();
            bug.show();
            bug9.show();
            
            bug.move();
            bug10.move();
            bug.show();
            bug10.show();
        }
    }
}
// Bug class
function Bug(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.show = function () {
        image(ball, this.x, this.y, 80, 80);
    };

    this.move = function () {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    };
}
