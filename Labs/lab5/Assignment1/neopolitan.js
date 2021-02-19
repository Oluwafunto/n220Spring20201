let colorArray = ["#a52a2a", "#f5f5dc", "#ffc0cb"];

function setup(){
    createCanvas(800,600);
}

function draw(){
    background(0);
    noStroke();

    for (var i=0; i < colorArray.length; i++) {
        fill( colorArray[i] );
        rect(200 + (100*i), 200, 100, 100);
    }

}