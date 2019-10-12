const myArray = ["rock", "paper", "scissors"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const outside = document.getElementById("outside");

rock.addEventListener("click", functionRock);
paper.addEventListener("click", functionPaper);
scissors.addEventListener("click", functionScissors);

function functionRock(e) {

    const computerGame = myArray[Math.floor(Math.random() * myArray.length)];

    if (computerGame == "rock") {
        console.log("equal");
    } else if (computerGame == "paper") {
        console.log("Computer won");
        addResultUILose();
    } else {
        console.log("You won");
        addResultUIWon();
    }

}

function functionPaper(e) {

    const computerGame = myArray[Math.floor(Math.random() * myArray.length)];

    if (computerGame == "paper") {
        console.log("equal");
    } else if (computerGame == "scissors") {
        console.log("Computer won");
        addResultUILose();
    } else {
        console.log("You won");
        addResultUIWon();
    }

}

function functionScissors(e) {

    const computerGame = myArray[Math.floor(Math.random() * myArray.length)];

    if (computerGame == "scissors") {
        console.log("equal");
    } else if (computerGame == "rock") {
        console.log("Computer won");
        addResultUILose();
    } else {
        console.log("You won");
        addResultUI();
    }

}


function addResultUIWon(){
    const span = document.createElement("span");
    span.className = "col-sm-4 alert alert-success mx-auto mt-5 text-center";
    span.appendChild(document.createTextNode("You Won"));
    outside.appendChild(span);

    setTimeout(function(){
        outside.innerHTML = "";
    },2000);  
}

function addResultUILose(){
    const span = document.createElement("span");
    span.className = "col-sm-4 alert alert-danger mx-auto mt-5 text-center";
    span.appendChild(document.createTextNode("Computer Won"));
    outside.appendChild(span);

    setTimeout(function(){
        outside.innerHTML = "";
    },2000);  
}


