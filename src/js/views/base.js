export const elements = {
    nameInput: document.querySelector('.users-name-input'),
    characterImg: document.querySelector('.character-img'),
    leftArrow: document.querySelector('.left'),
    characterSelect: document.querySelector('.character-select'),
    rightArrow: document.querySelector('.right'),
    usersNameInput: document.querySelector('.users-name-input'),
    startButton: document.querySelector('.start-button'),
    timer: document.querySelector('.timer'),
    usersInput: document.querySelector('.users-input'),
    boxOne: document.querySelector('.box1'),
    boxes: Array.from(document.querySelectorAll(".box")),
    finishBox: document.querySelector('.box36')

};

const elementStrings = {

};

export const getCurrentBoxEl = (currentPos) => {
   const currBox = document.getElementById(`box-${currentPos}`);
   return currBox;
};

export const getCharacterImg = () => {
    const characterImgEl = document.querySelector('.character-box');
    return characterImgEl;
};

export const getRequiredBoxEl = (requiredPos) => {
    const requiredBox = document.getElementById(requiredPos);
    return requiredBox;
 };


export const characters = ["images/trump.png", "images/Boris.png"];

export const rendercharacter = (character) => {
    elements.boxOne.insertAdjacentHTML("beforeend", '<img class="character-img character-box" src="' + character + '">');
};

export const renderCountdown = (timer) => {
    // elements.usersInput.style.visibility = "hidden";
    elements.timer.style.visibility = "unset";
    elements.timer.innerHTML = timer;

};


export const renderGo = () => {
    elements.timer.innerHTML = "Go";
};


export const removeCountdown = () => {
    elements.timer.style.visibility = "hidden";
};

export const removeUsersInput = () => {
    elements.usersInput.parentElement.removeChild(elements.usersInput);
};

// export const renderLeaderBoard = (players) => {
//     let leaderboard;
//       if (players.length <= 1) {
//          leaderboard =
//                             html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].time + '</p></div><div class="Two"><p>2. - </p></div><div class="Three"><p>3. - </p></div></div><div class="play-again-btn"><input type="button" class="play-btn" value="PLAY AGAIN"></div></div></div>';
//                         } else if (leaderBoard.length === 2) {
//                             const leaderboard =
//                             html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].time + '</p></div><div class="Two"><p>2. ' + leaderBoard[1].name + ' ' + leaderBoard[1].time + '</p></div><div class="Three"><p>3. - </p></div></div><div class="play-btn"><input type="button" class="play-again-btn" value="PLAY AGAIN"></div></div></div>';
//                         } else {
//                             html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].time + '</p></div><div class="Two"><p>2. ' + leaderBoard[1].name + ' ' + leaderBoard[1].time + '</p></div><div class="Three"><p>3. ' + leaderBoard[2].name + ' ' + leaderBoard[2].time + '</p></div></div><div class="play-again-btn"><input type="button" class="play-btn" value="PLAY AGAIN"></div></div></div>'
//                         }
// };


