let playerScore = 0;
let computerScore = 0;
let playerChoice;
let gameOver = false;

let cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach(function(card) {
    card.addEventListener('mouseenter', hoverEffect);
    card.addEventListener('mouseleave', hoverEffect);
    card.addEventListener('click', playerSelection);
})

function hoverEffect(e) {
    if (e.type === 'mouseenter') {
        e.target.style.backgroundColor = "#dddddd";
    } else if (e.type === 'mouseleave') {
        e.target.style.backgroundColor = "white";
    } else {
        console.log("error");
    }
}

function playerSelection(e) {
    if (e.target.getAttribute('id') === "rock" || e.target.parentNode.getAttribute('id') === "rock") {
        playerChoice = 1;
    } else if (e.target.id == "paper" || e.target.parentNode.getAttribute('id') === "paper") {
        playerChoice  = 2;
    } else if (e.target.id == "scissors" || e.target.parentNode.getAttribute('id') === "scissors") {
        playerChoice = 3;
    }

    game(playerChoice, computerSelection());    
}

function computerSelection() {
    return Math.floor(Math.random() * 3) + 1;
}

let info = document.getElementById('info');
let scoreInfo = document.getElementById('score-info');
let playerScoreInfo = document.getElementById('player');
let computerScoreInfo = document.getElementById('computer');

function game(pChoice, cChoice) {
    if (!gameOver) {
        let choiceStrings = [pChoice, cChoice];
        choiceStrings.forEach(function(choice, index) {
            switch(choice) {
                case 1:
                    choiceStrings[index] = "rock";
                    break;
                case 2:
                    choiceStrings[index] = "paper";
                    break;
                case 3:
                    choiceStrings[index] = "scissors";
                    break;
            }
        });

        info.textContent = `You played ${choiceStrings[0]}. Computer played ${choiceStrings[1]}.`;

        if (pChoice === cChoice) {
            scoreInfo.textContent = "Tie. No points assigned to either side.";
        } else if (pChoice === cChoice - 1 || (pChoice === 3 && cChoice === 1)) {
            scoreInfo.textContent = "Computer awarded a point.";
            computerScore++;
        } else {
            scoreInfo.textContent = "Player awarded a point.";
            playerScore++;
        }

        playerScoreInfo.textContent = `Player Score: ${playerScore}`;
        computerScoreInfo.textContent = `Computer Score: ${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            gameOver = true;
            if (playerScore === 5) {
                scoreInfo.textContent += " Game Over. Player wins!";
            } else {
                scoreInfo.textContent += " Game Over. Computer wins!";
            }
        }
    }
}

