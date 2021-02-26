let circleDefault = '#FF0000'; //default color of the circle
let rectDefault = '#0000FF';  //default color of the rectangle
let colorsArray = ['#ffe666', '#c9b8ff', '#cbc4cc', '#ff9966']; //array of colors

// draws the canvas
function setup() {
    createCanvas(800, 600);
    
  }
  
function draw() {
    background(0); 
    rectMode(CENTER); 
    noStroke();
// draws rectangle and fill it with the default color
    fill(rectDefault);
    rect(400, 200 , 200, 200)

// draws circle and fill it with the default color    
    fill(circleDefault);
    circle( 200, 200, 80);
  }
//onclick function of the mouse to randomly change the color for the array  
  function mousePressed() {
    let d = dist(mouseX, mouseY,800, 600);
    if (d > 100) {
        let rndArray = (int)(Math.random() * 4);
        circleDefault = colorsArray[rndArray];
    }
    if (d > 100) {
        let rndArray = (int)(Math.random() * 4);
        rectDefault = colorsArray[rndArray];
    }
}