const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')



let playerChoice
let computerChoice
let result



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3) + 1

        if (randomNumber === 1) {
            computerChoice = img= 'rock'
        }
        if (randomNumber === 2) {
            computerChoice = 'paper'
        }
        if (randomNumber === 3) {
            computerChoice = 'scissors'
        }

    computerChoiceDisplay.innerHTML = computerChoice
    }


    function getResult() {
        if (computerChoice === playerChoice) {
            result = 'DRAW'
        }
        if (computerChoice === 'rock' && playerChoice === 'paper') {
            result = 'WIN'
        }
        if (computerChoice === 'rock' && playerChoice === 'scissors') {
            result = 'LOST'
        }
        if (computerChoice === 'paper' && playerChoice === 'scissors') {
            result = 'WIN'
        }
        if (computerChoice === 'paper' && playerChoice === 'rock') {
            result = 'LOST'
        }
        if (computerChoice === 'scissors' && playerChoice === 'rock') {
            result = 'WIN'
        }
        if (computerChoice === 'scissors' && playerChoice === 'paper') {
            result = 'LOST'
        }
        resultDisplay.innerHTML = result
    }

    