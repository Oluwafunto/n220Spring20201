let colors = ["#940f15", 	"#2e598f", "	#0c2141", "#ddcb93"]; //different color to selec t from

let positions = [ 0, 0, 0, 0]; // different positions 


function setup() {

    createCanvas(400, 400) //draws a square canvas to display drawings

}

    function draw() {

        background(100); //color of the canvas

        positions.push(mouseX); //moves the drawing along the x direction when the mouse is horzontally
        positions.shift(); //moves the drawing along the x direction when the mouse is horizontally


        for( var i = 0; i < positions.length; i ++) {
            fill( colors[i] ) //fills the cirle in the loop with color, starting from the first
            circle( i*positions[i], 60 + i*70,  20) // draws the circle with postion and color from the arrays above

        }

        for( var i = 0; i < positions.length; i ++) {
            fill(colors[i]); //fills the square in the loop with color, starting from the first
            rect( i*positions[i],i*85, 50, 50) // draws the square with postion and color from the arrays above
    
        }

      


 

    }
    
