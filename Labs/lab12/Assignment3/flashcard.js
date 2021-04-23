let element = document.getElementById("squareOne");
element.addEventListener("click",itsClicked);
element.style.width = "200px";
element.style.height = "200px";
element.style.float = "left";
element.style.margin = "10px";
element.style.textAlign = "center";


let elementTwo = document.getElementById("squareTwo");
elementTwo.addEventListener("click",itsClicked);
elementTwo.style.width = "200px";
elementTwo.style.height = "200px";
elementTwo.style.float = "left";
elementTwo.style.margin = "10px";
elementTwo.style.textAlign = "center";


let elementThree = document.getElementById("squareThree");
elementThree.addEventListener("click",itsClicked);
elementThree.style.width = "200px";
elementThree.style.height = "200px";
elementThree.style.float = "left";
elementThree.style.margin = "10px";
elementThree.style.textAlign = "center";

function itsClicked(event) { 
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response;

    console.log(response);

}