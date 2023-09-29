function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);

	//robots head
    //change colour and shape
	fill(100,150,0);
	ellipse(250, 250, 300, 400);


	//robots antenna
	
    fill(50, 50, 100);
    arc(250, 30, 80, 80, 0, PI + QUARTER_PI, PIE)
    
    fill(200, 0, 200);
	rect(210, 50, 80, 30);
    
	//robots eyes
    //screwball eyes
	
    fill(255);
    ellipse(175, 200, 80, 80);
    ellipse(175, 200, 60, 60);
    ellipse(175, 200, 40, 40);
    ellipse(175, 200, 20, 20);
    
    point(175, 200)
    
    ellipse(325, 200, 80, 80);
    ellipse(325, 200, 60, 60);
    ellipse(325, 200, 40, 40);
    ellipse(325, 200, 20, 20);
	point(325, 200);
    
	//robots nose
    //change the shape of nose
	fill(0, 0, 200);
	quad(200, 250, 300, 250, 200, 300, 300, 300);
     
	//robots ears
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

	//robots mouth
	noFill();
	beginShape();
	curveVertex(175, 340);
	curveVertex(200, 370);
	curveVertex(225, 340);
	curveVertex(250, 370);
	curveVertex(275, 340);
	curveVertex(300, 370);
	curveVertex(325, 340);
	endShape();
    
    
}