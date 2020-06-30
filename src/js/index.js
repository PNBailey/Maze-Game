import * as base from './views/base'
import * as gameView from './views/gameView'
import Player from './models/Player'
import Game from './models/Game'

const state = {};
let timer;
let isPlayerFinished = false;


// GAME CONTROLLER

base.elements.characterSelect.addEventListener("click", gameView.scrollCharacter);

const delay = async (ms) => {
    return await new Promise(resolve => setTimeout(resolve, ms));
};

const countDown = () => {
    timer = 3;
    let startTimer = setInterval(() => {
        timer -= 1;
        base.renderCountdown(timer);
        if (timer <= 0) {
            clearInterval(startTimer);
        }
    }, 1000);
};

const ctrlPlayerMovement = (e) => {
    state.game.getCurrentPosition(base.elements.boxes);
    let direction = "";
    let addOrSubtract = "";
    let requiredNumber = "";
    const key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            direction = "left";
            addOrSubtract = "-";
            requiredNumber = 1;
            state.game.getRequiredPosition(requiredNumber, addOrSubtract);
            gameView.moveCharacter(direction, state.game.currentPosition, state.game.requiredPos, state.player.character);
            isPlayerFinished = gameView.checkPlayerFinished();
            if(isPlayerFinished) {
                ctrlPlayerFinished();
            }
            break;
        case 38: //Up arrow key
            direction = "up";
            addOrSubtract = "-";
            requiredNumber = 6;
            state.game.getRequiredPosition(requiredNumber, addOrSubtract);
            gameView.moveCharacter(direction, state.game.currentPosition, state.game.requiredPos, state.player.character);
            isPlayerFinished = gameView.checkPlayerFinished();
            if(isPlayerFinished) {
                ctrlPlayerFinished();
            }
            break;
        case 39: //right arrow key
            direction = "right";
            addOrSubtract = "+";
            requiredNumber = 1;
            state.game.getRequiredPosition(requiredNumber, addOrSubtract);
            gameView.moveCharacter(direction, state.game.currentPosition, state.game.requiredPos, state.player.character);
            isPlayerFinished = gameView.checkPlayerFinished();
            if(isPlayerFinished) {
                ctrlPlayerFinished();
            }
            break;
        case 40: //down arrow key
            direction = "down";
            addOrSubtract = "+";
            requiredNumber = 6;
            state.game.getRequiredPosition(requiredNumber, addOrSubtract);
            gameView.moveCharacter(direction, state.game.currentPosition, state.game.requiredPos, state.player.character);
            isPlayerFinished = gameView.checkPlayerFinished();
            if(isPlayerFinished) {
                ctrlPlayerFinished();
            }
            break;
    }
};

const ctrlStartWallChanges = async () => {
    const borderTop = "top";
    const borderRight = "right";
    const borderBottom = "bottom";
    const borderLeft = "left";
    const add = "add";
    const remove = "remove";
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderLeft, 15, 6);
    gameView.changeWalls(add, borderTop, 28);
    gameView.changeWalls(add, borderRight, 5, 14);
    gameView.changeWalls(add, borderBottom, 22);
    gameView.changeWalls(remove, borderBottom, 8);
    gameView.changeWalls(remove, borderRight, 4, 21, 28);
    gameView.changeWalls(remove, borderTop, 14);
    gameView.changeWalls(remove, borderLeft, 5, 22, 29);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderTop, 27, 34, 35);
    gameView.changeWalls(add, borderLeft, 4);
    gameView.changeWalls(add, borderRight, 21, 3);
    gameView.changeWalls(add, borderBottom, 21, 28, 29);
    gameView.changeWalls(remove, borderRight, 27, 5, 34, 21);
    gameView.changeWalls(remove, borderTop, 14);
    gameView.changeWalls(remove, borderLeft, 28, 6, 35);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderLeft, 6, 28);
    gameView.changeWalls(add, borderTop, 28);
    gameView.changeWalls(add, borderRight, 5, 27);
    gameView.changeWalls(add, borderBottom, 22);
    gameView.changeWalls(remove, borderBottom, 21);
    gameView.changeWalls(remove, borderRight, 17);
    gameView.changeWalls(remove, borderTop, 27);
    gameView.changeWalls(remove, borderLeft, 18);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderLeft, 26, 18);
    gameView.changeWalls(add, borderRight, 25, 17);
    gameView.changeWalls(remove, borderBottom, 28);
    gameView.changeWalls(remove, borderRight, 5);
    gameView.changeWalls(remove, borderTop, 34);
    gameView.changeWalls(remove, borderLeft, 6);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderTop, 34);
    gameView.changeWalls(add, borderBottom, 28);
    gameView.changeWalls(remove, borderBottom, 19);
    gameView.changeWalls(remove, borderRight, 27, 26);
    gameView.changeWalls(remove, borderTop, 25);
    gameView.changeWalls(remove, borderLeft, 28, 27);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderLeft, 15, 6);
    gameView.changeWalls(add, borderTop, 28);
    gameView.changeWalls(add, borderRight, 5, 14);
    gameView.changeWalls(add, borderBottom, 22);
    gameView.changeWalls(remove, borderBottom, 8);
    gameView.changeWalls(remove, borderRight, 4, 21, 28);
    gameView.changeWalls(remove, borderTop, 14);
    gameView.changeWalls(remove, borderLeft, 5, 22, 29);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderTop, 27, 34, 35);
    gameView.changeWalls(add, borderLeft, 4);
    gameView.changeWalls(add, borderRight, 21, 3);
    gameView.changeWalls(add, borderBottom, 21, 28, 29);
    gameView.changeWalls(remove, borderRight, 27, 5, 34, 21);
    gameView.changeWalls(remove, borderTop, 14);
    gameView.changeWalls(remove, borderLeft, 28, 6, 35);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderLeft, 6, 28);
    gameView.changeWalls(add, borderTop, 28);
    gameView.changeWalls(add, borderRight, 5, 27);
    gameView.changeWalls(add, borderBottom, 22);
    gameView.changeWalls(remove, borderBottom, 21);
    gameView.changeWalls(remove, borderRight, 17);
    gameView.changeWalls(remove, borderTop, 27);
    gameView.changeWalls(remove, borderLeft, 18);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderLeft, 26, 18);
    gameView.changeWalls(add, borderRight, 25, 17);
    gameView.changeWalls(remove, borderBottom, 28);
    gameView.changeWalls(remove, borderRight, 5);
    gameView.changeWalls(remove, borderTop, 34);
    gameView.changeWalls(remove, borderLeft, 6);
    await delay(1500);
    if (isPlayerFinished) {
        return;
    }
    gameView.changeWalls(add, borderTop, 34);
    gameView.changeWalls(add, borderBottom, 28);
    gameView.changeWalls(remove, borderBottom, 19);
    gameView.changeWalls(remove, borderRight, 27, 26);
    gameView.changeWalls(remove, borderTop, 25);
    gameView.changeWalls(remove, borderLeft, 28, 27);

};

const ctrlStartGame = async () => {
    //1. create new player using player object from getPlayer method
    const newPlayer = gameView.getPlayer();
    state.player = new Player(newPlayer.name, newPlayer.character);

    //2. create new game and leaderboard
    state.game = new Game();
    console.log(state);

    //3. remove users input 
    base.removeUsersInput();

    //4. Insert character into start position of maze
    base.rendercharacter(state.player.character);

    //5. begin and display countdown
    countDown();
    base.renderCountdown(timer);

    //6. await for countdown to finish and display Go 
    await delay(3000);
    base.renderGo();

    //7. remove go
    await delay(1500);
    base.removeCountdown();

    //8. get the start time for new game
    state.game.getStartTime();

    //9. allow user to move
    document.addEventListener("keydown", ctrlPlayerMovement);

    //10. start wall changes
    ctrlStartWallChanges();

};

base.elements.startButton.addEventListener("click", ctrlStartGame);

const ctrlPlayerFinished = () => {

    const leaderBoard = [];

    //1. stop plyer from moving (remove event listener)
    document.removeEventListener("keydown", ctrlPlayerMovement);

    //2. get finish time
    state.game.calcFinishTime();
    state.player.finishTime = state.game.totalTime;
    
    //3. push player to leaderBoard
    leaderBoard.push({
        name: state.player.name,
        finishTime: state.player.finishTime
    });

    //4. update leader board
    state.game.addLeaderBoard(leaderBoard);

    console.log(state);

};










// // PLAYER CONTROLLER
// const playerController = (function () {

//     // New player constructors

//     class Player {

//         constructor(name, time) {
//             this.name = name;
//             this.time = time;
//         }
//     }

//     // Data structure
//     const leaderBoard = [];

//     const DOMstrings = {
//         characterImg: ".character-img",
//         right: ".right",
//         left: ".left",
//         startBtn: ".ok-btn",
//         nameInput: ".users-name-input",
//         usersInput: ".users-input",
//         boxOne: ".box1",
//         timer: ".timer",
//         boxes: Array.from(document.querySelectorAll(".box")),
//         finishBox: ".box36",
//         playAgainBtn: ".play-again-btn",
//         endContainer: ".end-container",
//         gameEnd: ".game-end",
//         container: ".container",
//         playBtn: ".play-btn"

//     }

//     const characters = ["images/trump.png", "images/Boris.png"];

//     let chosenCharacter = [];

//     chosenCharacter.push(characters[0]);

//     let startTime;


//     return {

//         // Characte selection arrows

//         leftArrow: () => {

//             document.querySelector(DOMstrings.characterImg).src = characters[1];
//             chosenCharacter.splice(0, 1, characters[1]);

//             document.querySelector(DOMstrings.characterImg).classList.remove("trump");
//             document.querySelector(DOMstrings.characterImg).classList.add("boris");


//         },

//         rightArrow: () => {

//             document.querySelector(DOMstrings.characterImg).src = characters[0];
//             chosenCharacter.splice(0, 1, characters[0]);

//             document.querySelector(DOMstrings.characterImg).classList.remove("boris");
//             document.querySelector(DOMstrings.characterImg).classList.add("trump");

//         },

//         // Inserting character onto maze start position

//         insertCharacter: () => {

//             document.querySelector(DOMstrings.boxOne).insertAdjacentHTML("beforeend", '<img class="character-img character-box" src="' + chosenCharacter + '">');

//              // begin player game timer
//              let currTime = new Date();
//              startTime = currTime.getTime();

//         },

//         // When player reaches finish line

//         playerFinished: (name) => {
//             if (document.querySelector(DOMstrings.characterImg).parentNode.id === 36 || document.querySelector(DOMstrings.characterImg).parentNode.id === "box-36") {

//                 //1. stop player movement 
//                 document.removeEventListener("keydown", moveCharacter);

//                 //2. stop timer
//                 let finTime = new Date();
//                 let finishTime = finTime.getTime();
//                 let total = ((finishTime - startTime) / 1000) - 4; 
//                 totalTime = total.toFixed(2);           

//                 //3. create new player object
//                 let newPlayer
//                 newPlayer = new Player(name, totalTime);


//                 //4. push player into leader and sort leader board 
//                 leaderBoard.push(newPlayer);
//                 leaderBoard.sort((a, b) => a.time - b.time);


//                 //5. display pop up with leader board
//                 let html;

//                 if (leaderBoard.length <= 1) {
//                     html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].time + '</p></div><div class="Two"><p>2. - </p></div><div class="Three"><p>3. - </p></div></div><div class="play-again-btn"><input type="button" class="play-btn" value="PLAY AGAIN"></div></div></div>';
//                 } else if (leaderBoard.length === 2) {
//                     html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].time + '</p></div><div class="Two"><p>2. ' + leaderBoard[1].name + ' ' + leaderBoard[1].time + '</p></div><div class="Three"><p>3. - </p></div></div><div class="play-btn"><input type="button" class="play-again-btn" value="PLAY AGAIN"></div></div></div>';
//                 } else {
//                     html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].time + '</p></div><div class="Two"><p>2. ' + leaderBoard[1].name + ' ' + leaderBoard[1].time + '</p></div><div class="Three"><p>3. ' + leaderBoard[2].name + ' ' + leaderBoard[2].time + '</p></div></div><div class="play-again-btn"><input type="button" class="play-btn" value="PLAY AGAIN"></div></div></div>'
//                 }


//                 document.querySelector(DOMstrings.endContainer).insertAdjacentHTML("beforeend", html);

//                 document.querySelector(DOMstrings.gameEnd).style.visibility = "unset";


//             }
//         },

//         // Allowing user to press play again button to restart game

//         playAgain: () => {
//             let finishedPlayer, parentEl;


//                 //1. delete existing character from finish line
//                 finishedPlayer = document.querySelector(DOMstrings.finishBox);
//                 finishedPlayer.removeChild(finishedPlayer.childNodes[0]);

//                 //2. bring character select pop up

//                 document.querySelector(DOMstrings.usersInput).style.visibility = "unset";


//                 //3. remove leaderboard pop up 

//                 parentEl = document.querySelector(DOMstrings.endContainer);
//                 parentEl.removeChild(parentEl.childNodes[1]);
//             },





//         getDOMStrings: () => {
//             return DOMstrings;
//         },

//         getChosenCharacter: () => {
//             return chosenCharacter;
//         }

//     };

// })();

// // NAVIGATION CONTROLLER
// const navigationController = (function () {

//     const DOMstrings = playerController.getDOMStrings();

//     return {


//         // 1. establish what current position is (save all box html base.elements into an array and loop through array to establish which one has an image child in it. Save the id into a variable and return it to the method so that we know what the current position is)
//         currentPosition: (boxes) => {
//             let res = null;
//             boxes.forEach((curr) => {
//                 if (typeof curr.children[0] !== 'undefined' && curr.children[0]) {
//                    const splitID = curr.id.split('-');

//                     res = splitID[1];
//                     return;
//                 }
//             });

//             return res;
//         },


//         // 2. direction arrow functions 

//         moveLeft: (currentPos, chosenCharacter) => {
//             let requiredPos
//             if (document.getElementById(`box-${currentPos}`).classList.contains("borderLeft")) {
//             } else {
//                 const parentEl = document.querySelector(DOMstrings.characterImg).parentNode;
//                 parentEl.removeChild(parentEl.childNodes[0]);
//                 requiredPos = `box-${--currentPos}`;
//                 document.getElementById(requiredPos).insertAdjacentHTML("beforeend", '<img class="character-img character-box" src="' + chosenCharacter + '">');
//             }

//         },

//         moveUp: (currentPos, chosenCharacter) => {
//             let requiredPos
//             if (document.getElementById(`box-${currentPos}`).classList.contains("borderTop")) {
//             } else {
//                 const parentEl = document.querySelector(DOMstrings.characterImg).parentNode;
//                 parentEl.removeChild(parentEl.childNodes[0]);
//                 requiredPos = parseInt(currentPos) - 6;
//                 requiredPos = `box-${requiredPos}`;
//                 document.getElementById(requiredPos).insertAdjacentHTML("beforeend", '<img class="character-img character-box" src="' + chosenCharacter + '">');
//             }

//         },

//         moveRight: (currentPos, chosenCharacter) => {
//             let requiredPos
//             if (document.getElementById(`box-${currentPos}`).classList.contains("borderRight")) {
//             } else {
//                 const parentEl = document.querySelector(DOMstrings.characterImg).parentNode;
//                 parentEl.removeChild(parentEl.childNodes[0]);
//                 requiredPos = `box-${++currentPos}`;
//                 document.getElementById(requiredPos).insertAdjacentHTML("beforeend", '<img class="character-img character-box" src="' + chosenCharacter + '">');
//             }

//         },

//         moveDown: (currentPos, chosenCharacter) => {
//             let requiredPos
//             if (document.getElementById(`box-${currentPos}`).classList.contains("borderBottom")) {
//             } else {
//                 const parentEl = document.querySelector(DOMstrings.characterImg).parentNode;
//                 parentEl.removeChild(parentEl.childNodes[0]);
//                 requiredPos = parseInt(currentPos) + 6;
//                 requiredPos = `box-${requiredPos}`;
//                 document.getElementById(requiredPos).insertAdjacentHTML("beforeend", '<img class="character-img character-box" src="' + chosenCharacter + '">');
//             }

//         },

//         // changing wall methods

//         changeOne: () => {
//             document.getElementById(DOMstrings.boxes[13].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[14].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[13].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[7].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[3].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[4].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[4].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[5].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[21].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[21].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[27].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[27].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[28].id).classList.remove("borderLeft");
//         },

//         changeTwo: () => {
//             document.getElementById(DOMstrings.boxes[21].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[20].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[26].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[28].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[26].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[27].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[20].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[4].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[5].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[33].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[27].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[34].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[28].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[33].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[34].id).classList.remove("borderLeft");
//         },

//         changeThree: () => {
//             document.getElementById(DOMstrings.boxes[25].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[24].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[26].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[20].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[14].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[14].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[14].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[5].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[4].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[19].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[15].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[8].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[18].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[24].id).classList.remove("borderTop");
//         },

//         changeFour: () => {
//             document.getElementById(DOMstrings.boxes[32].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[33].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[26].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[20].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[32].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[26].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[30].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[24].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[28].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[28].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[29].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[10].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[4].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[5].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[22].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[4].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[16].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[15].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[21].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[15].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[21].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[22].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[35].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[34].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[35].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[29].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[32].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[33].id).classList.remove("borderLeft");
//         },

//         // DEFAULT WALLS 
//         changeFive: () => {
//             document.getElementById(DOMstrings.boxes[14].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[9].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[10].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[4].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[5].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[4].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[8].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[9].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[15].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[15].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[16].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[15].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[14].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[14].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[20].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[15].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[21].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[19].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[21].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[21].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[22].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[24].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[18].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[26].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[28].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[22].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[24].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[25].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[26].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[27].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[29].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[28].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[30].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[24].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[32].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[26].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[34].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[27].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[33].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[34].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[34].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[28].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[35].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[34].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[35].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[29].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[33].id).classList.remove("borderTop");
//         },

//         changeSix: () => {
//             document.getElementById(DOMstrings.boxes[13].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[14].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[13].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[7].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[3].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[4].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[4].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[5].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[21].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[21].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[27].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[27].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[28].id).classList.remove("borderLeft");
//         },

//         changeSeven: () => {
//             document.getElementById(DOMstrings.boxes[21].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[20].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[26].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[28].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[26].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[27].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[20].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[4].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[5].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[33].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[27].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[34].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[28].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[33].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[34].id).classList.remove("borderLeft");
//         },

//         changeEight: () => {
//             document.getElementById(DOMstrings.boxes[25].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[24].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[26].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[20].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[14].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[14].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[14].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[5].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[4].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[19].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[15].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[8].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[18].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[24].id).classList.remove("borderTop");
//         },

//         changeNine: () => {
//             document.getElementById(DOMstrings.boxes[14].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[9].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[10].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[4].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[5].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[4].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[8].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[9].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[15].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[15].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[16].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[15].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[14].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[14].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[20].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[15].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[21].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[19].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[21].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[21].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[22].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[24].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[18].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[26].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[20].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[28].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[22].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[24].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[25].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[26].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[27].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[29].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[28].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[30].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[24].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[32].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[26].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[34].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[27].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[33].id).classList.add("borderRight");
//             document.getElementById(DOMstrings.boxes[34].id).classList.add("borderLeft");
//             document.getElementById(DOMstrings.boxes[34].id).classList.remove("borderTop");
//             document.getElementById(DOMstrings.boxes[28].id).classList.remove("borderBottom");
//             document.getElementById(DOMstrings.boxes[35].id).classList.remove("borderLeft");
//             document.getElementById(DOMstrings.boxes[34].id).classList.remove("borderRight");
//             document.getElementById(DOMstrings.boxes[35].id).classList.add("borderTop");
//             document.getElementById(DOMstrings.boxes[29].id).classList.add("borderBottom");
//             document.getElementById(DOMstrings.boxes[33].id).classList.remove("borderTop");
//         }



//     };

// })();

// // APP CONTROLLER
// const appController = (function (playerCtrl, naviCtrl) {

//     const DOMstrings = playerCtrl.getDOMStrings();

//     if(name) {
//        const currentPos = naviCtrl.currentPosition(DOMstrings.boxes);
//     }


//     let name;


//     const chosenCharacter = playerCtrl.getChosenCharacter();

//     const setupEventListeners = () => {


//         document.querySelector(DOMstrings.left).addEventListener("click", () => {
//             playerCtrl.leftArrow();
//         });

//         document.querySelector(DOMstrings.right).addEventListener("click", () => {
//             playerCtrl.rightArrow();
//         });

//         document.querySelector(DOMstrings.startBtn).addEventListener("click", () => {
//             playerReady();
//         });

//         document.querySelector(DOMstrings.endContainer).addEventListener("click", playerCtrl.playAgain);

//     }

//     // player is ready

//     const playerReady = () => {

//         //1. get players name 
//         name = document.querySelector(DOMstrings.nameInput).value;

//         //2. Remove character selection part of HTML 
//         document.querySelector(DOMstrings.usersInput).style.visibility = "hidden";

//         //3. insert character into maze once player ready
//         playerCtrl.insertCharacter();

//         //4. get current position
//         // currentPos = naviCtrl.currentPosition(DOMstrings.boxes);
//         console.log(naviCtrl.currentPosition(DOMstrings.boxes));

//         //5. begin countdown
//         const countDown = new Promise((resolve) => {
//             let timer = 3;
//             let startTimer = setInterval(() => {
//                 document.querySelector(DOMstrings.timer).style.visibility = "unset";
//                 document.querySelector(DOMstrings.timer).innerHTML = timer;
//                 timer -= 1;
//                 if (timer < 0) {
//                     document.querySelector(DOMstrings.timer).style.visibility = "hidden";
//                     clearInterval(startTimer);
//                     resolve();
//                 }
//             }, 1000);
//         });

//         // start game

//         const ctrlStartGame = () => new Promise((resolve) => {
//             resolve();
//         });

//         // creating promises for wall changes

//         const changeWallOne = () => new Promise((resolve) => {
//             setInterval(() => {
//                 resolve();
//             }, 1500);

//         });

//         const changeWallTwo = () => new Promise((resolve) => {
//             setInterval(() => {
//                 resolve();
//             }, 1500);

//         });

//         const changeWallThree = () => new Promise((resolve) => {
//             setInterval(() => {
//                 resolve();
//             }, 1500);

//         });

//         const changeWallFour = () => new Promise((resolve) => {
//             setInterval(() => {
//                 resolve();
//             }, 1500);

//         });

//         const changeWallFive = () => new Promise((resolve) => {
//             setInterval(() => {
//                 resolve();
//             }, 1500);

//         });

//         const changeWallSix = () => new Promise((resolve) => {
//             setInterval(() => {
//                 resolve();
//             }, 1500);

//         });

//         const changeWallSeven = () => new Promise((resolve) => {
//             setInterval(() => {
//                 resolve();
//             }, 1500);

//         });

//         const changeWallEight = () => new Promise((resolve) => {
//             setInterval(() => {
//                 resolve();
//             }, 1500);

//         });

//         const changeWallNine = () => new Promise((resolve) => {
//             setInterval(() => {
//                 resolve();
//             }, 1500);

//         });


//         countDown
//             .then(() => {

//                 //1. dislay GO! and then make countdown disappear
//                 document.querySelector(DOMstrings.timer).style.visibility = "unset";
//                 document.querySelector(DOMstrings.timer).style.left = "625px";
//                 document.querySelector(DOMstrings.timer).innerHTML = "GO!";
//                 return ctrlStartGame();
//             })

//             .then(() => {

//                 //2. allow player to move
//                 document.addEventListener("keydown", (e) => {
//                     let currentPos = naviCtrl.currentPosition(DOMstrings.boxes, DOMstrings);
//                     document.querySelector(DOMstrings.timer).innerHTML = "";

//                     const key_code = e.which || e.keyCode;
//                     switch (key_code) {
//                         case 37: //left arrow key
//                             naviCtrl.moveLeft(currentPos, chosenCharacter);
//                             playerCtrl.playerFinished(name);
//                             break;
//                         case 38: //Up arrow key
//                             naviCtrl.moveUp(currentPos, chosenCharacter);
//                             playerCtrl.playerFinished(name);
//                             break;
//                         case 39: //right arrow key
//                             // naviCtrl.removeCharacter(DOMstrings);
//                             naviCtrl.moveRight(currentPos, chosenCharacter);
//                             playerCtrl.playerFinished(name);
//                             break;
//                         case 40: //down arrow key
//                             naviCtrl.moveDown(currentPos, chosenCharacter);
//                             playerCtrl.playerFinished(name);
//                             break;
//                     }
//                 });



//                 //3. consuming promises - changing walls

//                 return changeWallOne();

//             })

//             .then(() => {
//                 naviCtrl.changeOne();
//                 return changeWallTwo();

//             })

//             .then(() => {

//                 naviCtrl.changeTwo();
//                 return changeWallThree();

//             })

//             .then(() => {

//                 naviCtrl.changeThree();
//                 return changeWallFour();

//             })

//             .then(() => {

//                 naviCtrl.changeFour();
//                 return changeWallFive();
//             })
//             // DEFAULT WALLS 
//             .then(() => {

//                 naviCtrl.changeFive();
//                 return changeWallSix();

//             })

//             .then(() => {

//                 naviCtrl.changeSix();
//                 return changeWallSeven();

//             })


//             .then(() => {

//                 naviCtrl.changeSeven();
//                 return changeWallEight();

//             })

//             .then(() => {

//                 naviCtrl.changeEight();
//                 return changeWallNine();

//             })

//             .then(() => {
//                 naviCtrl.changeNine();

//             })

//     }


//     return {
//         init: () => {
//             setupEventListeners();
//         }
//     };


// })(playerController, navigationController);


// appController.init();