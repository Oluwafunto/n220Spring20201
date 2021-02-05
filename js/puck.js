function setup(){
    createCanvas(800,800);
}

function draw(){
     var xLocation;
  
    fill("#ff0000")
    if (mouseX<=400){
        xLocation = 400 + (mouseX - 400)
    } 
    else{
        fill("#0000ff")
        xLocation = 400 + (mouseX - 400)
    }

    
    background(200)
    ellipse(xLocation, 400, 200 , 200);
}