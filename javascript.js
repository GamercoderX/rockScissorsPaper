

function getPlayerChoice(options){
    let choice = prompt('choose rock, scissors or paper: ')
    choice = choice.toLowerCase()
    while (!options.includes(choice)){
        choice = prompt('Try again dumbass. Choose rock, scissors or paper: ')
        choice = choice.toLowerCase()
    }
    
    return choice
}

function getComputerChoice(options){
const randomElement = options[Math.floor(Math.random() * options.length)];

return randomElement;
}

function evaluateWinner(player,CPU){

    if (player === CPU){
        return "nobody!"
    }
    if (CPU === 'rock' && player === 'paper'){
        plr += 1
        return "the player"
    }

    if (CPU === 'scissors' && player === 'rock'){
        plr += 1
        return "the player"
    }

    if (CPU === 'paper' && player === 'scissors'){
        plr += 1
        return "the player"
    }
    cpu += 1
    return "the CPU"


}

function displayWinner(result, cpu, plr){
    let score = document.querySelector('#score');
    let victor = document.querySelector('#victor');
    score.textContent = `CPU = ${cpu} & Player = ${plr}`
    victor.textContent = `So the winner is ${result}`
    console.log(`So the winner is ${result}`)
    return 
}

let cpu = 0;
let plr = 0;

function playRound(player){
    const options = ['rock', 'scissors', 'paper'];
    // let player = getPlayerChoice(options)
    let CPU = getComputerChoice(options)
    let result = evaluateWinner(player,CPU)
    displayWinner(result, cpu, plr)
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    playRound('rock');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    playRound('scissors');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    playRound('paper');
});