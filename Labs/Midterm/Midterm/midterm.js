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
    function setup() {
        createCanvas(800, 600);
    }   

    function draw() {
        background(70);
    diffCircle.update();
    }
 
    var myCicle = [];

    function mousePressed() { 
      
         if(r<200){
             
         }
        } 
     

    for(var i = 0; i < 11; i++) {
        myCircle[i] = { x: i * 60, y: 10 };
        }
      
        for(var i = 0; i < myCicle.length; i++) {
            var b = myCicle[i];
            ellipse(b.x, b.y, 60, 20);
    
            }