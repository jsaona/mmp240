var ball = [];
var img;
var slider;

function preload() {
    img = loadImage('images/ball.png');
}


function setup() {
    slider = createSlider(0,360);
    createCanvas(800, 500);
    for (var i = 0; i < 10; i++) {
        ball.push(new Ball(random(350), random(300)));
    };
    
    var button = select('#button');
    // callback
    button.mousePressed(start);
};


function draw() {
//    (slider.value(),100,100);
    background("black");
    for (var i = 0; i < ball.length; i++) {
        ball[i].move();
        ball[i].show();        
    }
}

function start() {
    if(ball == img) {
		ball = img;
	} else {
		ball = img;
	}
}

// Ball class
function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.show = function () {
        image(img, this.x, this.y, 80, 80);
    };

    this.move = function () {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    };

};