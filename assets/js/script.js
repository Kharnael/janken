// Déclaration de variables
let computerChoiceDisplay = document.getElementById('computer')
let userChoiceDisplay = document.getElementById('user')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.getElementsByName('playGame')
let choice
let result

// audio correct de bouton
let playWin = () => {
  new Audio('assets/img/nice.mp3').play()
  Audio.volume = 0.2;
}

// audio incorrect de bouton
let playLose = () => {
  new Audio('assets/img/wrong.mp3').play()
  Audio.volume = 0.2;
}

//audio égalité de bouton
let playDraw = () => {
  new Audio('assets/img/draw.mp3').play()
  Audio.volume = 0.2;
}

//bouton musique
let playMusic = () => {
  new Audio('assets/img/.mp3').play()
  
}


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
      playDraw()
    }
    if (computerChoice === 'Rock ぐう' && choice === "Paper ぱあ") {
      result = 'You win'
      playWin()
    }
    if (computerChoice === 'Rock ぐう' && choice === "Scissors ちょき") {
      result = 'You lost'
      playLose()
    }
    if (computerChoice === 'Paper ぱあ' && choice === "Scissors ちょき") {
      result = 'You win'
      playWin()
    }
    if (computerChoice === 'Paper ぱあ' && choice === 'Rock ぐう') {
      result = 'You lose'
      playLose()
    }
    if (computerChoice === 'Scissors ちょき' && choice === 'Rock ぐう') {
      result = 'You win'
      playWin()
    }
    if (computerChoice === 'Scissors ちょき' && choice === "Paper ぱあ") {
      result = 'You lose'
      playLose()
    }
    resultDisplay.innerHTML = result
  }

// Clic bouton
possibleChoices.forEach(possibleChoices=> possibleChoices.addEventListener('click', (e) => {
    choice = e.target.id
    userChoiceDisplay.innerHTML = (`You have chosen : ${choice}`)
    generateComputerChoice()
    getResult()
}))

