let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;  

document.getElementById('submitbtn').addEventListener("click", () => {
    const userGuess = Number(document.getElementById("guess").value);
    const resultElement = document.getElementById("result");

    attempts++;

    if (userGuess === randomNumber) {
        resultElement.textContent = `Correct! You guessed the number in ${attempts} attempt(s).`;
        document.getElementById('submitbtn').disabled = true;  
    } else if (userGuess < randomNumber) {
        resultElement.textContent = "Too low! Try again.";
    } else {
        resultElement.textContent = "Too high! Try again.";
    }
});

// Restart Game functionality
document.getElementById('restartbtn').addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    attempts = 0; 
    document.getElementById("guess").value = '';
    document.getElementById("result").textContent = ''; 
    document.getElementById('submitbtn').disabled = false;
});
