

function setup(){
    createCanvas(1400,200);
    background(100);
}

function draw(){

    for(var i = 25; i >0; i--) {
        fill(0);
        circle( (i*50), 100, 15);
        
        if (i%3==0){
                    fill ("#800080");
                    circle( (i*50), 100, 15);
        }            
            
                
        if (i%5==0){
                    fill ("#80ff00");
                   rect( 10 +(i*57), 85, 40, 40);
        }
        
        
            
        if((i%5==0) && (i%3==0)){
                fill ("#0000ff");
                rect(100, 100, 40, 40);
                
        }
    }

}