//Assignning variables
let circleX = 280;
let circleY = 200;

let circleXSpeed = -2;
let circleYSpeed = 2;

let rectX = 750;
let rectY = 0;
rectW = 20;
rectH = 150; 

let rectXSpeed = 0;
let rectYSpeed = 0;

//Fucntion to draw the background that displays the content
function setup() {
    createCanvas(800, 600)
}


//Function  to draw the circle and the rectangle

function draw(){
    background(0);

        //circle
        circleX = circleX + circleXSpeed;
        circleY = circleY + circleYSpeed;
        noStroke();
        circle(circleX, circleY, 20);    
                    
        //rectangle
        rectX = rectX + rectXSpeed;
        rectY = rectY + rectYSpeed;
            //rectangle screen bounce    
                if (rectY > height-150 ) {
                    rectYSpeed = 0;
                    }
            
                if (rectY < 0) {
                    rectYSpeed = 1;
                    }   
                        
                rect(rectX, rectY, rectW, rectH);
        
// function to allow the  the collision of the ball against the wall 
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

            var colliding = false;
                
            if(circleX > rectX && circleX < rectX + rectW) {
                
            if(circleY > rectY && circleY < rectY + rectH) {
                
                    return true;
                
                }
                
        }
                
        return colliding;
                
        }    
            result = collideRect(0, 40, 0, 550, 150, 20);   


//code that makes the ball bounce off rect

if(collideRect(circleX, circleY, rectX, rectY, rectW, rectH)){
    circleXSpeed = -3;
            
}
        
if(collideRect(circleX, circleY, rectX, rectY, rectW, rectH)){
    circleYSpeed = -3;
            
}

// code that makes the ball bounce off walls

        
if (circleY > height) {
    circleYSpeed = -3;
    }
if (circleX < 0) {
    circleXSpeed = 3;
    }

if (circleY < 0) {
    circleYSpeed = 3;
    }

// Arrowkey movement to move the rectangle
if(keyIsDown(UP_ARROW)) {
        rectYSpeed = -5;
    }

if(keyIsDown(DOWN_ARROW)) {
        rectYSpeed = 5;
                
    }


// code that makes the ball reappear at the centre
if (circleX > width) {
        circleX = 400;
        circleY = 300;
        circleXSpeed = -3;

    }                  
}

    