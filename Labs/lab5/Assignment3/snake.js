let positionX = new Array(10);
let positionY = new Array(10);

function setup() {
    createCanvas(800,600);

}

function draw() {

    background(0);

    positionX.push( mouseX );
    positionX.shift();

    positionY.push( mouseY );
    positionY.shift();

    for (var i=0; i < positionX.length; i++) {
        fill("#ffff00")
        circle(positionX[i], positionY[i], 15);
    }
}