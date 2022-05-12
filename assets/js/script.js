// Déclaration de variables
let computerChoiceDisplay = document.getElementById('computer')
let userChoiceDisplay = document.getElementById('user')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.querySelectorAll('button')
let choice
let result

// Génération de choix par l'ordinateur
let generateComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1 // je me suis renseigné, mais je comprends pas tout (à creuser)
    
    if (randomNumber === 1) {
      computerChoice = 'Rock ぐう'
    } 
    else if (randomNumber === 2) {
      computerChoice = 'Scissors ちょき'
    }
    else if (randomNumber === 3) {
      computerChoice = 'Paper ぱあ'
    }
    computerChoiceDisplay.innerHTML = (`Your foe has chosen : ${computerChoice}`)
  }

  let = getResult = () => {
    if (computerChoice === choice) {
      result = 'Draw'
    }
    if (computerChoice === 'Rock ぐう' && choice === "Paper ぱあ") {
      result = 'You win'
    }
    if (computerChoice === 'Rock ぐう' && choice === "Scissors ちょき") {
      result = 'You lost'
    }
    if (computerChoice === 'Paper ぱあ' && choice === "Scissors ちょき") {
      result = 'You win'
    }
    if (computerChoice === 'Paper ぱあ' && choice === 'Rock ぐう') {
      result = 'You lose'
    }
    if (computerChoice === 'Scissors ちょき' && choice === 'Rock ぐう') {
      result = 'You win'
    }
    if (computerChoice === 'Scissors ちょき' && choice === "Paper ぱあ") {
      result = 'You lose'
    }
    resultDisplay.innerHTML = result
  }


possibleChoices.forEach(possibleChoices=> possibleChoices.addEventListener('click', (e) => {
    choice = e.target.id
    userChoiceDisplay.innerHTML = (`You chose : ${choice}`)
    generateComputerChoice()
    getResult()
}))

let yes