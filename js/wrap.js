var radius = 80;
var x = -radius;
var speed = 5;
function setup() {
 createCanvas(800, 600);
 frameRate(5);
 
}


function draw() {
 background(0);
 fill("#0000ff"); 
 x += speed; 
 if (x > width+radius) {
 x = -radius; 
 }
 circle(x, 200, radius );
}