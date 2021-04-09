let dvBox = document.getElementById("box"); 

//setting backgorund color to green
dvBox.style.backgroundColor = "#009900";

//variable for boxsize
let boxSize = 100;

function increaseSize() {

    //click to increase boxsize
    
    boxSize = boxSize * 1.1;
    dvBox.style.width = boxSize + "px";
    dvBox.style.height = boxSize + "px";
    

    }

//setting box height and width    
dvBox.style.width = boxSize + "px";
dvBox.style.height = boxSize + "px";