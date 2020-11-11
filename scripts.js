// UI Elements selector
let play = document.querySelector('#play_game');
let playAgain = document.querySelector('#play_again_game');
let startGame = document.querySelector('#st_game');
let endGame = document.querySelector('#end_game');
let gameStatus = document.querySelector('#game_status');

// Add Event Listener
play.addEventListener('click',playGame);
playAgain.addEventListener('click',playGame);

// Functions
function playGame(){
    let attempt = 1;
    let randValue = Math.floor(Math.random()* 10)+1;
    let message = '';
    let score = 0;

    // Value calculating
    while (attempt <= 3) {
        let guess = parseInt(prompt(message+"Guess the number, chance "+attempt+": "));

        if (guess == randValue) {
            message = "You entered correct number\n";
            console.log('You Have won the game '+attempt);
            score += 33.33;
        }else if (guess > randValue){
            message = "You entered a greater number\n";
        }else if (guess < randValue) {
            message = "You entered a smaller number\n";
        }
        attempt++;
    }
    score = Math.ceil(score);

    // Score showing
    if (attempt == 4 && score == 0) {
        alert(message);
        startGame.style.display = 'none';
        endGame.style.display = 'block';
        gameStatus.innerHTML = `<i class="fas fa-frown-open"></i><br><span style="font-family: 'Fredoka One', cursive;">Your Score is 0</span><br>You have lose the game.`;

    }else if (attempt == 4 && score == 34) {
        alert(message);
        startGame.style.display = 'none';
        endGame.style.display = 'block';
        gameStatus.innerHTML = `<i class="fas fa-trophy"></i><br><span style="font-family: 'Fredoka One', cursive;">Your Score is 34</span><br>You have won the game.`;
    }else if (attempt == 4 && score == 67) {
        alert(message);
        startGame.style.display = 'none';
        endGame.style.display = 'block';
        gameStatus.innerHTML = `<i class="fas fa-trophy"></i><br><span style="font-family: 'Fredoka One', cursive;">Your Score is 67</span><br>You have won the game.`;
    }else if (attempt == 4 && score == 100) {
        alert(message);
        startGame.style.display = 'none';
        endGame.style.display = 'block';
        gameStatus.innerHTML = `<i class="fas fa-trophy"></i><br><span style="font-family: 'Fredoka One', cursive;">Your Score is 100</span><br>You have won the game.`;
    }
     
}