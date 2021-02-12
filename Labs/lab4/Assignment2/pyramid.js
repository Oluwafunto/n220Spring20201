function setup(){
    createCanvas(800, 600)

}

function draw(){
    background(220)
    fill("red")
    
    for(var i = 0; i<4; i++){

        for(var j = 0; j<i + 1; j++){
            rect(j*55, i*55, 50, 50) 


        }
        
        

      
    }
    
    
    
    
}