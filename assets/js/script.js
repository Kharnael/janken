// Déclaration de variables
let computerChoiceDisplay = document.getElementById('computer')
let userChoiceDisplay = document.getElementById('user')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.getElementsByName('playGame')
let choice
let result


// audio correct de bouton
let playWin = () => {
  new Audio('assets/sound/nice.mp3').play()
  Audio.volume = 0.2;
}

// audio incorrect de bouton
let playLose = () => {
  new Audio('assets/sound/wrong.mp3').play()
  Audio.volume = 0.2;
}

//audio égalité de bouton
let playDraw = () => {
  new Audio('assets/sound/draw.mp3').play()
  Audio.volume = 0.2;
}

// //bouton musique
// let playBgm = () => {
//   const music = document.querySelector('#music');
//   if(soundAmbiance.src == 'assets/img/volumeoff.svg' || soundAmbiance.src == 'assets/img/volumeoff.svg') {
//     soundAmbiance.src = 'assets/img/volume.svg';
//     music.volume = 0.5;
//     music.play();
//   } 
//   else {  
//   soundAmbiance.src ='assets/img/volumeoff.svg';
//   music.pause();
//   music.currentTime = 0;
//   }
// }

// // audio click
// let soundAmbiance = document.getElementById('soundAmbiance');
// soundAmbiance.addEventListener('click', play);



// Génération de choix par l'ordinateur
let generateComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1 // je me suis renseigné, mais je comprends pas tout (à creuser)
    
    if (randomNumber === 1) {
      computerChoice = 'Rockぐう'
    } 
    else if (randomNumber === 2) {
      computerChoice = 'Scissorsちょき'
    }
    else if (randomNumber === 3) {
      computerChoice = 'Paperぱあ'
    }
    computerChoiceDisplay.innerHTML = (`Your foe has chosen : ${computerChoice}`)
  }

  let = getResult = () => {
    if (computerChoice === choice) {
      result = 'Draw'
      playDraw()
    }
    if (computerChoice === 'Rockぐう' && choice === "Paperぱあ") {
      result = 'You win'
      playWin()
    }
    if (computerChoice === 'Rockぐう' && choice === "Scissorsちょき") {
      result = 'You lost'
      playLose()
    }
    if (computerChoice === 'Paperぱあ' && choice === "Scissorsちょき") {
      result = 'You win'
      playWin()
    }
    if (computerChoice === 'Paper ぱあ' && choice === 'Rockぐう') {
      result = 'You lose'
      playLose()
    }
    if (computerChoice === 'Scissorsちょき' && choice === 'Rockぐう') {
      result = 'You win'
      playWin()
    }
    if (computerChoice === 'Scissorsちょき' && choice === "Paperぱあ") {
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

