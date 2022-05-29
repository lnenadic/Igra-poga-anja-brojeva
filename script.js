var msg1 = document.getElementById("mess1");
var msg2 = document.getElementById("mess2");
var msg3 = document.getElementById("mess3");

var answer = Math.floor(Math.random() * 100) + 1;
var numOfGuesses = 0;
var guessedNums = [];

function play() {
    var userGuess = document.getElementById("guess").value;

    if (userGuess < 1 || userGuess > 100) {
        alert("Unesi broj 1-100");
    } else {
        guessedNums.push(userGuess);
        numOfGuesses += 1;

        if (userGuess < answer) {
            msg1.textContent = "Vaš broj je pre nizak";
            msg2.textContent = "Broj pokušaja: " + numOfGuesses;
            msg3.textContent = "Uneseni brojevi: " + guessedNums;
            msg3.style.color = "Red";
        } else if (userGuess > answer) {
            msg1.textContent = "Vaš broj je pre visok";
            msg2.textContent = "Broj pokušaja: " + numOfGuesses;
            msg3.textContent = "Uneseni brojevi: " + guessedNums;
            msg3.style.color = "Red";
        } else if (userGuess == answer) {
            msg1.textContent = "POGODAK! 😎";
            msg1.style.color = "Green";
            msg2.textContent = "Broj je: " + answer;
            msg3.textContent = "Pogodak iz " + numOfGuesses + ". pokušaja";
            document.getElementById("btn").disabled = true;
        }
        if (numOfGuesses > 10) {
            return alert("Maksimalan broj pokušaja je 10");
        }

    }

}