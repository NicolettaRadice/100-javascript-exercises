//generate random numbers
let firstNumber = parseInt(Math.random() * 10);
let secondNumber = parseInt(Math.random() * 10);

//get the total
let total = firstNumber + secondNumber;

//display numbers on the canvas
let primary = document.getElementById("primary-number");
primary.innerHTML = `<p>${firstNumber}</p>`;

let secondary = document.getElementById("secondary-number");
secondary.innerHTML = `<p>${secondNumber}</p>`;

//get guess from user
let button = document.getElementById("btn");

button.addEventListener("click", function () {
    let guess = document.getElementById("guess").value;
    guess = Number(guess);
    //check answer
    if (guess === total) {
        document.getElementById('correct').style.display = 'block';
        document.getElementById('try-again').style.display = 'none';
        document.getElementById('more').style.display = 'block'

    } else {
        document.getElementById('try-again').style.display = 'block';
        document.getElementById('correct').style.display = 'none';
        document.getElementById('more').style.display = 'none';
    }
});

   //start again
   let again = document.getElementById("more");
   again.addEventListener("click", function () {
       window.location.reload();
   })