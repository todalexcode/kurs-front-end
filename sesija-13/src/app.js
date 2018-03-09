//Global variable for comp. random number
var randomNumber = Math.floor(Math.random() * 100) + 1;

//HTML elements in Javascript for game logic
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var resetButton;
var guessCount = 1;

guessField.focus();

//core game logic
function checkGuess() {
    var userGuess = Number(guessField.value)
    if (guessCount === 1) {
        guesses.textContent = 'Probali ste do sada: ';
    }
    guesses.textContent += userGuess + ' ';

    //check the user input
    if (userGuess === randomNumber) {
        //set game over - WIN
        lastResult.textContent = 'Cestitam! Pogodili ste broj!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        //set game over LOST
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        //if userGuess too low
        if (userGuess < randomNumber) {
            //infom the user - too low
            lastResult.textContent = 'Premali broj ...';
        }else if(userGuess > randomNumber){
            //infom the user - too high
            lastResult.textContent = 'Prevelik broj ...';
        }
    }
    //increment guesCount for 1
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


//game over control
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    //prepare new HTML button for the new game 
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start nove igre';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//reset game - including HTML content
function resetGame() {
    guessCount = 1;

    //clear paragraphs

    //enable button and text...
    
    resetButton.parrentNode.removeChild(resetButton);

    randomNumber = Math.floor(Math.random() * 100) + 1;

}