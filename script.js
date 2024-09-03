let scoreString = localStorage.getItem('score');
let score;

if (scoreString === null) {
    score = { wins: 0, losses: 0, ties: 0 };
} else {
    score = JSON.parse(scoreString);
}
changeScore();

function playGame(playerMove) {
    const computerMove = generateMove();
    let result;

    if (playerMove === 'Rock') {
        if (computerMove === 'Scissors') {
            result = 'Win';
            score.wins++;
        } 
        else if (computerMove === 'Rock') {
            result = 'Tie';
            score.ties++;
        } 
        else if (computerMove === 'Paper') {
            result = 'Lose';
            score.losses++;
        }
    }

    if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'Win';
            score.wins++;
        } 
        else if (computerMove === 'Paper') {
            result = 'Tie';
            score.ties++;
        } 
        else if (computerMove === 'Scissors') {
            result = 'Lose';
            score.losses++;
        }
    }

    if (playerMove === 'Scissors') {
        if (computerMove === 'Paper') {
            result = 'Win';
            score.wins++;
        } 
        else if (computerMove === 'Scissors') {
            result = 'Tie';
            score.ties++;
        } 
        else if (computerMove === 'Rock') {
            result = 'Lose';
            score.losses++;
        }
    }

    localStorage.setItem('score', JSON.stringify(score));
    changeScore();
    printResult(playerMove, computerMove, result);
}

function generateMove() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock';
    } 
    else if (randomNumber === 1) {
        return 'Paper';
    } 
    else {
        return 'Scissors';
    }
}

function changeScore() {
    let element = document.getElementById('score-card');
    element.innerHTML = `Wins: ${score.wins}  Ties: ${score.ties}  Losses: ${score.losses}`;
}

function printResult(playerMove, computerMove, result) {
    let resultElement = document.getElementById('result-para');
    let choosenElement = document.getElementById('choose-para');
    const resultHTML = `You - <img  class = "move-icon" src="Images/${playerMove}.png" alt="">   Computer - <img class = "move-icon" src="Images/${computerMove}.png" alt="">`
    resultElement.innerHTML = `It's a ${result}`;    
    choosenElement.innerHTML = resultHTML;
}

function resetScore() {
    localStorage.removeItem('score');
    score = { wins: 0, losses: 0, ties: 0 };
    changeScore();
    //alert('Scores cleared');
}