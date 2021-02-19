let ybricks = [];
let xbricks = [];
let speed = 10;
let intCount = 0;


function setup(){
    createCanvas (800,600);


    frameRate (5);
}


function draw() {

    background(0);

    if (mouseIsPressed) {
        
        ybricks [intCount] = mouseY;
        xbricks [intCount] = mouseX;
        intCount++;
    }

    for( var i=0; i < intCount; i++) {

        fill("#ffff00");
        rect(xbricks[i], ybricks[i] + speed, 50, 50);

        ybricks [i] = ybricks[i] + speed;
    }

}