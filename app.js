const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');

const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choices = ['piedra', 'papel', 'tijeras']
const fileNames = {
    'piedra': 'rock.png',
    'papel': 'paper.png',
    'tijeras': 'scissors.png',
};

let positiveScore = 0;
let negativeScore = 0;

buttons.forEach(
    button => button.addEventListener('click', startGame)
);


function startGame(event) {
    //Determinar la eleccion del jugador
    const button = event.currentTarget;
    const playerChoice = button.dataset.choice;
    console.log(playerChoice);

    //determinar la eleccion de la pc
    const computerChoice = getComputerChoice();
    console.log(computerChoice);


    //determinar quien gana
    const winner = getWinner(playerChoice, computerChoice);
    console.log(`El ganador es: ${winner} `);

    //mostrar la eleccion de los jugadores
    imgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
    imgComputerChoice.setAttribute('src', fileNames[computerChoice]);

    let result;
    //mostrar resultados
    if (winner === 'player') {
        result = 'ganas';
        ++positiveScore;
    } else if (winner === 'computer') {
        result = ' pierdes';
        ++negativeScore;
    } else { //empate
        result = 'empatas'
    }
    pResult.innerHTML = `Tú ${result} 
    escogiendo <strong>${playerChoice}</strong> 
    en contra de <strong>${computerChoice}</strong>.`;

    pScore.innerHTML = `Has ganado veces <strong>${positiveScore}</strong>.
     Has perdido <strong>${negativeScore}</strong> veces.`;
} //ojo

function getComputerChoice() {
    const i = parseInt(Math.random() * 3);
    return choices[i];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return null;
    }

    if (playerChoice === 'piedra') {
        if (computerChoice === 'papel') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (playerChoice === 'papel') {
        if (computerChoice === 'piedra') {
            return 'player';
        } else {
            return 'computer';
        }
    } else {
        if (computerChoice === 'papel') {
            return 'player';
        } else {
            return 'computer';
        }
    }
}