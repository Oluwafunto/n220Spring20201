let circleDefault = '#FF0000';
let rectDefault = '#0000FF';
let colorsArray = ['#ffe666', '#c9b8ff', '#cbc4cc', '#ff9966'];

function setup() {
    createCanvas(800, 600);
    
  }
  
function draw() {
    background(0); 
    rectMode(CENTER); 
    noStroke();

    fill(circleDefault);
    rect(400, 200 , 200, 200)
    fill(rectDefault);
    circle( 200, 200, 80);
  }
  
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