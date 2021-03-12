function setup() {
  createCanvas(800, 600)
}

//object
  var myCircle = {
  
   xPos : 0,
   yPos : 40,

   xSpeed : 5,
   ySpeed : 5,

   color : "##0000ff",

  update: function (){
      background("#0000ff");
          this.xPos = this.xPos + this.xSpeed;
          this.yPos = this.yPos + this.ySpeed;
          noStroke();
          fill(this.color);
          circle(this.xPos, this.yPos, 20); }

  }

function draw() {
  
  myCircle.update();

//key movements
  if(keyIsDown(LEFT_ARROW)) {
      myCircle.xSpeed = -5;
      fill("#ff0000")
  }

  if(keyIsDown(RIGHT_ARROW)) {
      myCircle.xSpeed = 5;
      fill("##ff0000")
  }
  
  if(keyIsDown(DOWN_ARROW)) {
      myCircle.ySpeed = 5;
      fill("#ff0000")
  }
  
  if(keyIsDown(UP_ARROW)) {
      myCircle.ySpeed = -5;
     fill("#ff0000");
  }

//bounce 
  if (myCircle.xPos > width) {
      myCircle.xSpeed = -5;
  }

  if (myCircle.yPos > height) {
      myCircle.ySpeed = -5;
  }
  if (myCircle.xPos < 0) {
      myCircle.xSpeed = 5;
  }

  if (myCircle.yPos < 0) {
      myCircle.ySpeed = 5;
  }

}