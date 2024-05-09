const randomNumber = Math.ceil(Math.random() * 100 + 1);
console.log(randomNumber)

const form=document.querySelector('.form')
const submit=document.querySelector('#subt');
const inputNumber = document.querySelector("#guessField");

const prevGuesses=document.querySelector('.guesses')

const lowOrHi=document.querySelector('.lowOrHi')


let prevArr=[]
form.addEventListener("submit",function(e){
  e.preventDefault()
   const value=parseInt(document.querySelector("#guessField").value);
   let guessesRemaning =parseInt( document.querySelector(".lastResult").innerHTML);
  guessesRemaning=guessesRemaning-1;
  
    if(isNaN(value) || value<0 || value>100){
      alert("Please enter a number between 0 and 100.")
    }else{
        if (value === randomNumber) {
          lowOrHi.innerHTML = "Correct guess";
        } else if (value > randomNumber) {
          lowOrHi.innerHTML = "<h2>Your value is higher</h2>";
        } else {
          lowOrHi.innerHTML = "<h2>Your value is lower</h2>";
        }

        prevArr.push(value);
        if (guessesRemaning < 0) {
          prevArr = [];
          prevGuesses.innerHTML = prevArr;
          lowOrHi.innerHTML = `<h2>Game over, Random number was ${randomNumber}</h2>`;
        } else {
          prevGuesses.innerHTML = prevArr;
          document.querySelector(".lastResult").innerHTML = guessesRemaning;
        }
    }

})