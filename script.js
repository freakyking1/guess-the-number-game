let numberToGuess;
let attempts = 0;

function startGame() {
    numberToGuess = Math.floor(Math.random() * 10) + 1; // Случайное число от 1 до 10
    attempts = 0;
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('userGuess').value = '';
    document.getElementById('restartButton').style.display = 'none';
}

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('userGuess').value);
    attempts++;

    if (userGuess < 1 || userGuess > 10) {
        document.getElementById('resultMessage').textContent = 'Введите число от 1 до 10.';
    } else if (userGuess < numberToGuess) {
        document.getElementById('resultMessage').textContent = 'Слишком низкое число! Попробуйте снова.';
    } else if (userGuess > numberToGuess) {
        document.getElementById('resultMessage').textContent = 'Слишком высокое число! Попробуйте снова.';
    } else {
        document.getElementById('resultMessage').textContent = `Поздравляю! Вы угадали число ${numberToGuess} за ${attempts} попыток!`;
        document.getElementById('restartButton').style.display = 'inline-block';
    }
});

document.getElementById('restartButton').addEventListener('click', startGame);

// Запустим игру при загрузке страницы
window.onload = startGame;