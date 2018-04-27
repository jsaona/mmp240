var ball = [];
var img;
var slider;
var move = true;

function preload() {
    img = loadImage('images/ball.png');
}


function setup() {
    slider = createSlider(0,75);
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
        
        if(move == true){
            ball[i].move();
            
        }
        ball[i].show();
        ball[i].speed = slider.value();        
    }
}

function start() {
    move = false 
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