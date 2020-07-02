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
        if (timer <= 0) {
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
    gameView.changeWalls(strings.add, strings.borderLeft, 15, 6);
    gameView.changeWalls(strings.add, strings.borderTop, 28);
    gameView.changeWalls(strings.add, strings.borderRight, 5, 14);
    gameView.changeWalls(strings.add, strings.borderBottom, 22);
    gameView.changeWalls(strings.remove, strings.borderBottom, 8);
    gameView.changeWalls(strings.remove, strings.borderRight, 4, 21, 28);
    gameView.changeWalls(strings.remove, strings.borderTop, 14);
    gameView.changeWalls(strings.remove, strings.borderLeft, 5, 22, 29);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(strings.add, strings.borderTop, 27, 34, 35);
    gameView.changeWalls(strings.add, strings.borderLeft, 4);
    gameView.changeWalls(strings.add, strings.borderRight, 21, 3);
    gameView.changeWalls(strings.add, strings.borderBottom, 21, 28, 29);
    gameView.changeWalls(strings.remove, strings.borderRight, 27, 5, 34, 21);
    gameView.changeWalls(strings.remove, strings.borderTop, 14);
    gameView.changeWalls(strings.remove, strings.borderLeft, 28, 6, 35);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(strings.add, strings.borderLeft, 6, 28);
    gameView.changeWalls(strings.add, strings.borderTop, 28);
    gameView.changeWalls(strings.add, strings.borderRight, 5, 27);
    gameView.changeWalls(strings.add, strings.borderBottom, 22);
    gameView.changeWalls(strings.remove, strings.borderBottom, 21);
    gameView.changeWalls(strings.remove, strings.borderRight, 17);
    gameView.changeWalls(strings.remove, strings.borderTop, 27);
    gameView.changeWalls(strings.remove, strings.borderLeft, 18);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(strings.add, strings.borderLeft, 26, 18);
    gameView.changeWalls(strings.add, strings.borderRight, 25, 17);
    gameView.changeWalls(strings.remove, strings.borderBottom, 28);
    gameView.changeWalls(strings.remove, strings.borderRight, 5);
    gameView.changeWalls(strings.remove, strings.borderTop, 34);
    gameView.changeWalls(strings.remove, strings.borderLeft, 6);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(strings.add, strings.borderTop, 34);
    gameView.changeWalls(strings.add, strings.borderBottom, 28);
    gameView.changeWalls(strings.remove, strings.borderBottom, 19);
    gameView.changeWalls(strings.remove, strings.borderRight, 27, 26);
    gameView.changeWalls(strings.remove, strings.borderTop, 25);
    gameView.changeWalls(strings.remove, strings.borderLeft, 28, 27);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(strings.add, strings.borderLeft, 15, 6);
    gameView.changeWalls(strings.add, strings.borderTop, 28);
    gameView.changeWalls(strings.add, strings.borderRight, 5, 14);
    gameView.changeWalls(strings.add, strings.borderBottom, 22);
    gameView.changeWalls(strings.remove, strings.borderBottom, 8);
    gameView.changeWalls(strings.remove, strings.borderRight, 4, 21, 28);
    gameView.changeWalls(strings.remove, strings.borderTop, 14);
    gameView.changeWalls(strings.remove, strings.borderLeft, 5, 22, 29);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(strings.add, strings.borderTop, 27, 34, 35);
    gameView.changeWalls(strings.add, strings.borderLeft, 4);
    gameView.changeWalls(strings.add, strings.borderRight, 21, 3);
    gameView.changeWalls(strings.add, strings.borderBottom, 21, 28, 29);
    gameView.changeWalls(strings.remove, strings.borderRight, 27, 5, 34, 21);
    gameView.changeWalls(strings.remove, strings.borderTop, 14);
    gameView.changeWalls(strings.remove, strings.borderLeft, 28, 6, 35);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(strings.add, strings.borderLeft, 6, 28);
    gameView.changeWalls(strings.add, strings.borderTop, 28);
    gameView.changeWalls(strings.add, strings.borderRight, 5, 27);
    gameView.changeWalls(strings.add, strings.borderBottom, 22);
    gameView.changeWalls(strings.remove, strings.borderBottom, 21);
    gameView.changeWalls(strings.remove, strings.borderRight, 17);
    gameView.changeWalls(strings.remove, strings.borderTop, 27);
    gameView.changeWalls(strings.remove, strings.borderLeft, 18);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(strings.add, strings.borderLeft, 26, 18);
    gameView.changeWalls(strings.add, strings.borderRight, 25, 17);
    gameView.changeWalls(strings.remove, strings.borderBottom, 28);
    gameView.changeWalls(strings.remove, strings.borderRight, 5);
    gameView.changeWalls(strings.remove, strings.borderTop, 34);
    gameView.changeWalls(strings.remove, strings.borderLeft, 6);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(strings.add, strings.borderTop, 34);
    gameView.changeWalls(strings.add, strings.borderBottom, 28);
    gameView.changeWalls(strings.remove, strings.borderBottom, 19);
    gameView.changeWalls(strings.remove, strings.borderRight, 27, 26);
    gameView.changeWalls(strings.remove, strings.borderTop, 25);
    gameView.changeWalls(strings.remove, strings.borderLeft, 28, 27);

};

const ctrlStartGame = async (event) => {
    // if (event.target === base.elements.startButton) {
        //1. create new player using player object from getPlayer method
        const newPlayer = gameView.getPlayer();
        state.player = new Player(newPlayer.name, newPlayer.character);

        //2. create new game and leaderboard
        state.game = new Game();
        // console.log(state);

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

    // }

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

    // sort leader board
    leaderBoard.sort((a, b) => a.finishTime - b.finishTime);

    // update leader board
    state.game.addLeaderBoard(leaderBoard);

    // render leaderboard
    gameView.renderLeaderBoard(state.game.leaderBoard, state.game.totalTime);

    // add play again event listener
    base.elements.leaderBoardContainer.addEventListener("click", gameView.setupPlayAgain);

};









