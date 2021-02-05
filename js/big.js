var circle_size = 10;

function setup() { 
  createCanvas(600, 600);
} 


function draw() { 
    background(0);
    fill("#0000ff");
  ellipse(300, 300, circle_size, circle_size);
  circle_size += 1;
  
  if (circle_size > 200) {
    circle_size = 0;
  }

}