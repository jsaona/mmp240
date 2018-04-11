function setup() {
	createCanvas(640, 460);
}
function draw() {
	background("tan");
	
    
	
    //YELLOW SQUARE
    fill("silver")
    rect(200, 200, 200, 200);
    strokeWeight(4);
    
    
    
    //EYES & MOUTH
    fill("black");
    
    //LEFT EYE
    ellipse(250, 265, 30, 30);
    
    //RIGHT EYE
    ellipse(350, 265, 30, 30);
    
    //MOUTH
    ellipse(295, 350, 75, 20);
    
    //ANTHENA
    line(300, 200, 300, 100);
    ellipse(300, 82, 30, 30);
}








