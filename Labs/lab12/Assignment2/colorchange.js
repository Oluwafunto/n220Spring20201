let element = document.getElementById("squareOne");
element.addEventListener("click",itsClicked);
element.style.backgroundColor = "#808080";
element.style.width = "300px";
element.style.height = "300px";
element.style.float = "left";
element.style.margin = "5px";

let elementTwo = document.getElementById("squareTwo");
elementTwo.addEventListener("click",itsClicked);
elementTwo.style.backgroundColor = "#808080";
elementTwo.style.width = "300px";
elementTwo.style.height = "300px";
elementTwo.style.float = "left";
elementTwo.style.margin = "5px";

let elementThree = document.getElementById("squareThree");
elementThree.addEventListener("click",itsClicked);
elementThree.style.backgroundColor = "#808080";
elementThree.style.width = "300px";
elementThree.style.height = "300px";
elementThree.style.float = "left";
elementThree.style.margin = "5px";

function itsClicked(event) { 
    let response = event.target.getAttribute("data-response");
    event.target.style.backgroundColor = response;
    console.log(response);

}