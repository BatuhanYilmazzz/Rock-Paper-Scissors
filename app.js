const myArray = ["rock", "paper", "scissors"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const outside = document.getElementById("outside");
const pcCountt = document.getElementById("pcCount");
const youCountt = document.getElementById("youCount");

let pcWin = 0;
let youWin = 0;

rock.addEventListener("click", functionRock);
paper.addEventListener("click", functionPaper);
scissors.addEventListener("click", functionScissors);

function functionRock(e) {

    const computerGame = myArray[Math.floor(Math.random() * myArray.length)];

    if (computerGame == "rock") {

        addResultUIEqual();
    } else if (computerGame == "paper") {

        pcWin++;
        addResultUILose();

    } else {

        youWin++;
        addResultUIWon();
    }

}

function functionPaper(e) {

    const computerGame = myArray[Math.floor(Math.random() * myArray.length)];

    if (computerGame == "paper") {
        addResultUIEqual();

    } else if (computerGame == "scissors") {

        pcWin++;
        addResultUILose();
    } else {

        youWin++;
        addResultUIWon();
    }

}

function functionScissors(e) {

    const computerGame = myArray[Math.floor(Math.random() * myArray.length)];

    if (computerGame == "scissors") {

        addResultUIEqual();
    } else if (computerGame == "rock") {

        pcWin++;
        addResultUILose();
    } else {

        youWin++;
        addResultUIWon();
    }

}


function addResultUIWon() {
    pcCountt.innerHTML = pcWin;
    youCountt.innerHTML = youWin;
    const span = document.createElement("span");
    span.className = "col-sm-4 alert alert-success text-dark font-weight-bold mx-auto mt-5 text-center";
    span.appendChild(document.createTextNode("YOU WON"));
    outside.appendChild(span);


    setTimeout(function () {
        outside.innerHTML = "";
    }, 2000);
}

function addResultUILose() {
    pcCountt.innerHTML = pcWin;
    youCountt.innerHTML = youWin;
    const span = document.createElement("span");
    span.className = "col-sm-4 alert alert-danger text-dark font-weight-bold mx-auto mt-5 text-center";
    span.appendChild(document.createTextNode("COMPUTER WON"));
    outside.appendChild(span);

    setTimeout(function () {
        outside.innerHTML = "";
    }, 2000);
}

function addResultUIEqual() {
    const span = document.createElement("span");
    span.className = "col-sm-4 alert alert-dark text-dark font-weight-bold mx-auto mt-5 text-center";
    span.appendChild(document.createTextNode("EQUAL"));
    outside.appendChild(span);

    setTimeout(function () {
        outside.innerHTML = "";
    }, 2000);
}