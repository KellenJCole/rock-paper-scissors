
function getPlayerChoice() {
    let choice = prompt("Enter rock, paper, or scissors");
    choice = choice.toLowerCase();
    choice = choice.trim();
    return choice;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1; // Returns 1, 2, or 3, representing rock, paper, or scissors
}

function playRound(compChoice, playerChoice) {
    let rpsInt;
    switch (playerChoice) {
        case "rock":
            rpsInt = 1;
            break;
        case "paper":
            rpsInt = 2;
            break;
        case "scissors":
            rpsInt = 3;
            break;
        default:
            console.log("Invalid player selection");
            break;
    }

    let returnString;

    if (rpsInt === compChoice) {
        returnString = `You tied, both you and the computer played ${playerChoice}`;
    } else if (rpsInt === 1 && compChoice === 2) {
        returnString = "You lost! Computer's paper beats your rock";
    } else if (rpsInt === 1 && compChoice === 3) {
        returnString = "You won! Your rock beat the computer's scissors";
    } else if (rpsInt === 2 && compChoice === 1) {
        returnString = "You won! Your paper beat the computer's rock";
    } else if (rpsInt === 2 && compChoice === 3) {
        returnString = "You lost! Your paper was cut by the computer's scissors";
    } else if (rpsInt === 3 && compChoice === 1) {
        returnString = "You lost! Your scissors were smashed by the computer's rock";
    } else if (rpsInt === 3 && compChoice === 2) {
        returnString = "You won! Your scissors cut the computer's paper";
    }

    return returnString;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore + computerScore < 5) {
        let winString = playRound(getComputerChoice(), getPlayerChoice());
        if (winString.includes("tie")) {
            // No points awarded to either side for a tie
        } else if (winString.includes("lost")) {
            computerScore++;
        } else if (winString.includes("won")) {
            playerScore++;
        }

        console.log(winString);
    }

    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("The computer won :(");
    }
}

game();
