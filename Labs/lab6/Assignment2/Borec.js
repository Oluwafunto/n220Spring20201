let circleX = 0;
let circleY = 40;

let circleXSpeed = 5;
let circleYSpeed = 5;

let rectX = 0;
let rectY = 550;
rectW = 150;
rectH = 25; 

let rectXSpeed = 4;
let rectYSpeed = 0;

function setup() {
    createCanvas(800, 600)
}



function draw(){

    background(0);

        
        circleX = circleX + circleXSpeed;
        circleY = circleY + circleYSpeed;
            noStroke();
            circle(circleX, circleY, 25);
                    
        
        rectX = rectX + rectXSpeed;
        rectY = rectY + rectYSpeed;
                  
                if (rectX > width-150 ) {
                    rectXSpeed = -5;
                    }
            
                if (rectX < 0) {
                    rectXSpeed = 5;
                    }   
                        
                rect(rectX, rectY, rectW, rectH);

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

                    if(collideRect(circleX, circleY, rectX, rectY, rectW, rectH)){
                        circleXSpeed = -4;
                            
                        }
                        
                    if(collideRect(circleX, circleY, rectX, rectY, rectW, rectH)){
                        circleYSpeed = -4;
                            
                        }
                
                
        if (circleX > width) {
            circleXSpeed = -4;
            }

        if (circleY > height) {
            circleYSpeed = -4;
            }
        if (circleX < 0) {
            circleXSpeed = 4;
            }

        if (circleY < 0) {
            circleYSpeed = 4;
            }

                         
    }