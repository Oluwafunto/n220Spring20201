//Array of colors
let colorArray = ["#2E37FE", "#525C65", "#325C74", "#53868B",  "#7AC5CD", "#C3E4ED" ,"#67E6EC","#98F5FF", "#BFEFFF", "#F0F8FF" ];

    var diffCircle = {
        x: 100,
        y: 350,
        w: 50, 
        r: 20,
        update: function() {
            ellipse(this.x, this.y, this.w, this.r);
        } 
          
    };
    //Fucntion to draw the canvas that displays all the drawing
    function setup() {
        createCanvas(800, 600);
    }   
//function to display the circle
    function draw() {
        background(70);
    diffCircle.update();
    if (mouseIsPressed) {
        diffCircle = diffCircle - 300 ;
      } else {
        diffCircle = diffCircle + 300;
      }
    }
 
    var myCicle = [];
//fucntion to allow the circle move down along the Y axis
   
     

    for(var i = 0; i < 11; i++) {
        myCircle[i] = { x: i * 60, y: 10 };
        }
      
        for(var i = 0; i < myCicle.length; i++) {
            var b = myCicle[i];
            ellipse(b.x, b.y, 60, 20);
    
            }