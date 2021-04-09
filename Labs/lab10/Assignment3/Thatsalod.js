var divArray = new Array(100);

//array of colors
var colors = ['#8cc8ff', '#b91428', '#264532', '#699516', '#deb887', '#ffa343', '#233028', '	#ffbf00'];

for (var i = 0; i < divArray.length; i++) {

   divArray[i] = document.createElement('div');

   divArray[i].className = "divs";

   divArray[i].style.background = colors[parseInt(Math.random() * colors.length)];
    
   document.body.appendChild(divArray[i]);

   console.log(print);
}

