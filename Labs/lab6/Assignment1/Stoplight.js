
let colors = ["#e50000","#ffff00", "#ccffcc"];

function setup() {
    createCanvas(800, 600);
    background(0)
}

function draw(){
    fill("#cccc00");
    rectMode(CENTER);
    rect( 150, 200, 150, 300);
    
    for( var i = 0; i < colors.length; i++){
        fill( colors[i] );
        noStroke();
        circle( 150, 100 + (70*i), 30 );
    }


    }