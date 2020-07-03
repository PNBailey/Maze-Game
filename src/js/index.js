import * as base from './views/base'
import * as gameView from './views/gameView'
import Player from './models/Player'
import Game from './models/Game'

const state = {};
let timer;
let isPlayerFinished = false;
const leaderBoard = [];


// GAME CONTROLLER

base.elements.characterSelect.addEventListener("click", gameView.scrollCharacter);

const delay = async (ms) => {
    return await new Promise(resolve => setTimeout(resolve, ms));
};

const countDown = () => {
    timer = 3;
    let startTimer = setInterval(() => {
        timer -= 1;
        gameView.renderCountdown(timer);
        if (timer <= 1) {
            clearInterval(startTimer);
        }
    }, 1000);
};

const ctrlPlayerMovement = (e) => {
    state.game.getCurrentPosition(base.elements.boxes);
    const strings = base.getStrings();
    const key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            state.game.getRequiredPosition(1, strings.subtract);
            gameView.moveCharacter(strings.left, state.game.currentPosition, state.game.requiredPos, state.player.character);
            isPlayerFinished = gameView.checkPlayerFinished();
            if (isPlayerFinished) {
                ctrlPlayerFinished();
            }
            break;
        case 38: //Up arrow key
            state.game.getRequiredPosition(6, strings.subtract);
            gameView.moveCharacter(strings.up, state.game.currentPosition, state.game.requiredPos, state.player.character);
            isPlayerFinished = gameView.checkPlayerFinished();
            if (isPlayerFinished) {
                ctrlPlayerFinished();
            }
            break;
        case 39: //right arrow key
            state.game.getRequiredPosition(1, strings.plus);
            gameView.moveCharacter(strings.right, state.game.currentPosition, state.game.requiredPos, state.player.character);
            isPlayerFinished = gameView.checkPlayerFinished();
            if (isPlayerFinished) {
                ctrlPlayerFinished();
            }
            break;
        case 40: //down arrow key
            state.game.getRequiredPosition(6, strings.plus);
            gameView.moveCharacter(strings.down, state.game.currentPosition, state.game.requiredPos, state.player.character);
            isPlayerFinished = gameView.checkPlayerFinished();
            if (isPlayerFinished) {
                ctrlPlayerFinished();
            }
            break;
    }
};

const ctrlStartWallChanges = async () => {
    const strings = base.getStrings();

    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWallsLoopAdd([strings.borderLeft, 15, 6], [strings.borderTop, 28], [strings.borderRight, 5, 14], [strings.borderBottom, 22]);

    gameView.changeWallsLoopRemove([strings.borderBottom, 8], [strings.borderRight, 4, 21, 28], [strings.borderTop, 14], [strings.borderLeft, 5, 22, 29]);

    await delay(1500);
    if (isPlayerFinished) {
        return;
    }

    gameView.changeWallsLoopAdd([strings.borderLeft, 4], [strings.borderTop, 27, 34, 35], [strings.borderRight, 21, 3], [strings.borderBottom, 21, 28, 29]);

    gameView.changeWallsLoopRemove([strings.borderRight, 27, 5, 34, 21], [strings.borderTop, 14], [strings.borderLeft, 28, 6, 35]);

    await delay(1500);
    if (isPlayerFinished) {
        return;
    }

    gameView.changeWallsLoopAdd([strings.borderLeft, 6, 28], [strings.borderTop, 28], [strings.borderRight, 5, 27], [strings.borderBottom,  22]);

    gameView.changeWallsLoopRemove([strings.borderBottom, 21], [strings.borderRight, 17], [strings.borderTop, 27], [strings.borderLeft, 18]);

    await delay(1500);
    if (isPlayerFinished) {
        return;
    }

    gameView.changeWallsLoopAdd([strings.borderLeft, 26, 18], [strings.borderRight, 25, 17]);

    gameView.changeWallsLoopRemove([strings.borderBottom, 28], [strings.borderRight, 5], [strings.borderTop, 34], [strings.borderLeft, 6]);

    await delay(1500);
    if (isPlayerFinished) {
        return;
    }

    gameView.changeWallsLoopAdd([strings.borderTop, 34], [strings.borderBottom, 28]);

    gameView.changeWallsLoopRemove([strings.borderBottom, 19], [strings.borderRight, 27, 26], [strings.borderTop, 25], [strings.borderLeft, 28, 27]);

    await delay(1500);
    if (isPlayerFinished) {
        return;
    }

    gameView.changeWallsLoopAdd([strings.borderLeft, 15, 6], [strings.borderTop, 28], [strings.borderRight, 5, 14], [strings.borderBottom,  22]);

    gameView.changeWallsLoopRemove([strings.borderBottom, 8], [strings.borderRight, 4, 21, 28], [strings.borderTop, 14], [strings.borderLeft, 5, 22, 29]);

    await delay(1500);
    if (isPlayerFinished) {
        return;
    }

    gameView.changeWallsLoopAdd([strings.borderLeft, 15, 6], [strings.borderTop, 27, 35], [strings.borderRight, 21, 3], [strings.borderBottom, 21, 28, 29]);

    gameView.changeWallsLoopRemove([strings.borderRight, 27, 5, 34, 21], [strings.borderTop, 14], [strings.borderLeft, 28, 6, 35]);

    await delay(1500);
    if (isPlayerFinished) {
        return;
    }

    gameView.changeWallsLoopAdd([strings.borderLeft, 15, 6, 28], [strings.borderTop, 28], [strings.borderRight, 5, 27], [strings.borderBottom, 22]);

    gameView.changeWallsLoopRemove([strings.borderBottom, 21], [strings.borderRight, 17], [strings.borderTop, 27], [strings.borderLeft, 18]);

    await delay(1500);
    if (isPlayerFinished) {
        return;
    }

    gameView.changeWallsLoopAdd([strings.borderLeft, 26, 18], [strings.borderRight, 25, 17]);

    gameView.changeWallsLoopRemove([strings.borderBottom, 28], [strings.borderRight, 5], [strings.borderTop, 34], [strings.borderLeft, 6]);
    
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }

    gameView.changeWallsLoopAdd([strings.borderTop, 34], [strings.borderBottom,  28]);

    gameView.changeWallsLoopRemove([strings.borderBottom, 19], [strings.borderRight, 27, 26], [strings.borderTop, 25], [strings.borderLeft, 28, 27]);

};

const ctrlStartGame = async () => {
    //1. create new player using player object from getPlayer method
    const newPlayer = gameView.getPlayer();
    state.player = new Player(newPlayer.name, newPlayer.character);

    //2. create new game and leaderboard
    state.game = new Game();

    //3. remove users input 
    gameView.removeUsersInput();

    //4. Insert character into start position of maze
    gameView.renderCharacter(state.player.character);

    //5. begin and display countdown
    countDown();
    gameView.renderCountdown(timer);

    //6. await for countdown to finish and display Go 
    await delay(3000);
    gameView.renderGo();

    //7. remove go
    await delay(1500);
    gameView.removeCountdown();

    //8. get the start time for new game
    state.game.getStartTime();

    //9. allow user to move
    document.addEventListener("keydown", ctrlPlayerMovement);

    //10. start wall changes
    ctrlStartWallChanges();

};

base.elements.startButton.addEventListener("click", ctrlStartGame);


const ctrlPlayerFinished = () => {

    //reset walls
    gameView.resetWalls();

    // stop plyer from moving (remove event listener)
    document.removeEventListener("keydown", ctrlPlayerMovement);

    // get finish time
    state.game.calcFinishTime();
    state.player.finishTime = state.game.totalTime;

    // push player to leaderBoard
    leaderBoard.push({
        name: state.player.name,
        finishTime: state.player.finishTime
    });

    // update leader board
    state.game.addLeaderBoard(leaderBoard);

    // render leaderboard
    gameView.renderLeaderBoard(state.game.leaderBoard, state.game.totalTime);

    // add play again event listener
    base.elements.leaderBoardContainer.addEventListener("click", gameView.setupPlayAgain);

};









