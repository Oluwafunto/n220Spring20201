var circle_size = 10;

function setup() { 
  createCanvas(600, 600);
} 


function draw() { 
	background(0);
  ellipse(300, 300, circle_size, circle_size);
  circle_size += 2;
  
  if (circle_size > 600) {
    circle_size = 0;
  }

}