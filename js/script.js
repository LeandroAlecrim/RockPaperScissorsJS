//#region Globals
const CHOICES = ['rock', 'paper', 'scissors'];
const IMG_PATH = 'assets/img/';

let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;
//#endregion Globals

window.onload = function () {
  CHOICES.forEach((c) => {
    const img = document.createElement('img');
    img.id = c;
    img.src = `${IMG_PATH}${c}.png`;
    img.addEventListener('click', makeChoice);
    document.getElementById('choices').append(img);
  });
};

//#region Functions
function makeChoice() {
  // sua escolha
  you = this.id; // id do elemento que foi clicado
  document.getElementById('your-choice').src = `${IMG_PATH}${you}.png`;

  // oponente
  opponent = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  document.getElementById('opponent-choice').src = `${IMG_PATH}${opponent}.png`;

  // atualiza score
  updateScore(you, opponent);
}

/** Se jogador vence, retorna 1,
 * se o oponente vence, retorna -1,
 * se houver empate, retorna 0 */
function compareChoice(yourChoice, opponentChoice) {
  // rock < paper, paper < scissors, scissors < rock
  if (
    (yourChoice === 'rock' && opponentChoice === 'scissors') ||
    (yourChoice === 'paper' && opponentChoice === 'rock') ||
    (yourChoice === 'scissors' && opponentChoice === 'paper')
  )
    return 1;

  if (
    (yourChoice === 'scissors' && opponentChoice === 'rock') ||
    (yourChoice === 'rock' && opponentChoice === 'paper') ||
    (yourChoice === 'paper' && opponentChoice === 'scissors')
  )
    return -1;

  return 0;
}

/** Atualiza placar */
function updateScore(yourChoice, opponentChoice) {
  const compare = compareChoice(yourChoice, opponentChoice);
  // empate

  if (compare === 1) {
    yourScore++;
  } else if (compare === -1) {
    opponentScore++;
  } else {
    yourScore++;
    opponentScore++;
  }

  document.getElementById('your-score').innerText = yourScore;
  document.getElementById('opponent-score').innerText = opponentScore;
}

//#endregion Functions
