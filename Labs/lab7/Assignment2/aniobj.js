

//object 
var myCircle = { 
    r: 30,
    x: 100,
    y: 100,
    color: [65, 105, 225],
    speed:.2,
    update: function () {
        fill(this.color);
        this.x += this.speed;
        circle(this.x, this.y, this.r);
    }
}

function setup(){
    createCanvas(800,600);
    background("#ff0000")

}

function draw() {
    
    myCircle.update();
}