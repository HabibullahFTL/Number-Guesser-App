// UI Elements selector
let play = document.querySelector('#play_game');
let playAgain = document.querySelector('#play_again_game');
let startGame = document.querySelector('#st_game');
let game = document.querySelector('#game');
let inputForm = document.querySelector('#input_form');
let inputNum = document.querySelector('#input_number');
let submitNum = document.querySelector('.submit_number');
let gameMessage = document.querySelectorAll('.game_message');
let showResult = document.querySelector('#show_result');
let endGame = document.querySelector('#end_game');
let gameStatus = document.querySelector('#game_status');

// Add Event Listener
play.addEventListener('click',playGame);
inputForm.addEventListener('submit',proccessGame);
showResult.addEventListener('click',proccessGame);
playAgain.addEventListener('click',playGame);

// Functions
function playGame(){
    startGame.style.display = "none";
    game.style.display = "block";
    endGame.style.display = "none";
}

function proccessGame(e){
    let attempt = parseInt(submitNum.id);
    let randValue = Math.floor(Math.random()* 10)+1;
    let message = '';
    let score = 0;
    let num = inputNum.value;
    console.log(num);
    console.log(attempt);
    submitNum.id = attempt+1;

    if (attempt <= 2) {
        let result = gameMessage[0].id;
        if (num == randValue){
            message = "You entered correct number!";
            gameMessage[0].innerHTML = message;
            result += 33.33;
        }else if (num > randValue){
            message = "You entered a greater number!";
            gameMessage[0].innerHTML = message;
        }else if (num < randValue) {
            message = "You entered a smaller number!";
            gameMessage[0].innerHTML = message;
        }
        console.log(result)
    }else if (attempt == 3) {
        let result = gameMessage[0].id;
        if (num == randValue){
            message = "You entered correct number!";
            gameMessage[0].innerHTML = message;
            result += 33.33;
        }else if (num > randValue){
            message = "You entered a greater number!";
            gameMessage[1].innerHTML = message;
        }else if (num < randValue) {
            message = "You entered a smaller number!";
            gameMessage[1].innerHTML = message;
        }
        console.log(result)
        
        game.style.display = "none";
        document.querySelector('#process_game').style.display = "block";
        document.querySelectorAll('.game_label')[1].style.padding = "30px 10px";
    }else{
        document.querySelector('#process_game').style.display = "none";
        endGame.style.display = "block";


    }
    inputNum.value = '';
    e.preventDefault();
     
}