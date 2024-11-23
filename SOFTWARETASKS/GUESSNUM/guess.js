document.addEventListener("DOMContentLoaded", () => {
    const guessInput = document.getElementById("guessInput");
    const guessBtn = document.getElementById("guessBtn");
    const resultDiv = document.getElementById("result");
    const restartBtn = document.getElementById("restartBtn");

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    guessBtn.addEventListener("click", () => {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultDiv.innerText = "Please enter a valid number between 1 and 100!";
            resultDiv.style.color = "red";
        } else if (userGuess === randomNumber) {
            resultDiv.innerText = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;
            resultDiv.style.color = "green";
            guessBtn.disabled = true;
            restartBtn.classList.remove("hidden");
        } else if (userGuess < randomNumber) {
            resultDiv.innerText = "Too low! Try again.";
            resultDiv.style.color = "orange";
        } else {
            resultDiv.innerText = "Too high! Try again.";
            resultDiv.style.color = "orange";
        }

        // Clear the input after each guess
        guessInput.value = "";
        guessInput.focus();
    });

    restartBtn.addEventListener("click", () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        resultDiv.innerText = "";
        guessBtn.disabled = false;
        restartBtn.classList.add("hidden");
        guessInput.value = "";
        guessInput.focus();
    });
});