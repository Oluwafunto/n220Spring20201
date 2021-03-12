
var myCircles = [
    { x: 100, y: 150, r: 10 },
    { x: 280, y: 300, r: 14 },
    { x: 190, y: 50, r: 8 },
    { x: 390, y: 220, r: 25 },
];

function setup() {
    createCanvas(800, 600);
    fill("#6A5ACD");
}

function draw() {
    for(var i = 0; i < myCircles.length; i++) {
        circle(myCircles[i].x, myCircles[i].y, myCircles[i].r);
        myCircles[i].r +=1;
    }
}