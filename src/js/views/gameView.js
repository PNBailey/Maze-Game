import { elements } from './base'
import { characters } from './base'
import { getPlayAgainBtn } from './base'
import { getStrings } from './base'


export const scrollCharacter = (event) => {
    let currentCharacterIndex = characters.indexOf(elements.characterImg.getAttribute('src'));
    let newCharacterIndex;
    if (event.target === elements.leftArrow && currentCharacterIndex !== 0) {
        newCharacterIndex = currentCharacterIndex - 1;
    } else if (event.target === elements.leftArrow && currentCharacterIndex === 0) {
        newCharacterIndex = 1;
    } else if (event.target === elements.rightArrow && currentCharacterIndex !== characters.length - 1) {
        newCharacterIndex = currentCharacterIndex + 1;
    } else if (event.target === elements.rightArrow && currentCharacterIndex === characters.length - 1) {
        newCharacterIndex = 0;
    }
    elements.characterImg.src = characters[newCharacterIndex];
};

export const getPlayer = () => {
    const getPlayerDetails = {
        name: elements.usersNameInput.value,
        character: elements.characterImg.getAttribute('src')
    }
    return getPlayerDetails;
};


const removeAddCharacter = (chosenCharacter, requiredPos, currPosition) => {
    const parentEl = getCharacterImg(currPosition).parentNode;
    parentEl.removeChild(parentEl.childNodes[0]);
    const requiredBox = getRequiredBoxEl(requiredPos);
    requiredBox.insertAdjacentHTML("beforeend", '<img class="character-img character-box" src="' + chosenCharacter + '">');
};

export const moveCharacter = (direction, currPosition, requiredPos, chosenCharacter) => {
    const currentBoxEl = getCurrentBoxEl(currPosition);
    if (direction === "left" && !currentBoxEl.classList.contains("borderLeft")) {
        removeAddCharacter(chosenCharacter, requiredPos, currPosition);
    } else if (direction === "up" && !currentBoxEl.classList.contains("borderTop")) {
        removeAddCharacter(chosenCharacter, requiredPos, currPosition);
    } else if (direction === "right" && !currentBoxEl.classList.contains("borderRight")) {
        removeAddCharacter(chosenCharacter, requiredPos, currPosition);
    } else if (direction === "down" && !currentBoxEl.classList.contains("borderBottom")) {
        removeAddCharacter(chosenCharacter, requiredPos, currPosition);
    } else {
        return;
    }

};

export const changeWallsLoopAdd = (...arr) => {
    arr.forEach((e) => {
        changeWallsAdd(e);
    });
};

export const changeWallsLoopRemove = (...arr) => {
    arr.forEach((e) => {
        changeWallsRemove(e);
    });
};

export const changeWallsAdd = ([side, ...boxes]) => {
    const boxEls = getBoxArrEl(...boxes);
    boxEls.forEach((e) => {
        e.classList.add(side);
    });
    console.log(side, boxes);
};

export const changeWallsRemove = ([side, ...boxes]) => {
    const boxEls = getBoxArrEl(...boxes);
    boxEls.forEach((e) => {
        e.classList.remove(side);
    });
};


export const getBoxArrEl = (...boxes) => boxes.map(getCurrentBoxEl);

export const checkPlayerFinished = () => {
    const playerPosition = getCharacterImg();
    if (playerPosition.parentNode.id === "box-36") {
        return true;
    } else {
        return false;
    }

};

export const playerFinished = (isPlayerfinished) => {
    if (isPlayerfinished) {
        const finTime = new Date();
        const finishTime = finTime.getTime();
        const total = ((finishTime - startTime) / 1000) - 4;
        totalTime = total.toFixed(2);
    }

};

const getCurrentBoxEl = (currentPos) => {
    const currBox = document.getElementById(`box-${currentPos}`);
    return currBox;
};


const getCharacterImg = () => {
    const characterImgEl = document.querySelector('.character-box');
    return characterImgEl;
};


const getRequiredBoxEl = (requiredPos) => {
    const requiredBox = document.getElementById(requiredPos);
    return requiredBox;
};

export const renderCharacter = (character) => {
    elements.boxOne.insertAdjacentHTML("beforeend", '<img class="character-img character-box" src="' + character + '">');
};

const removeCharacter = () => {
    const characterImgEl = document.querySelector('.character-box');
    characterImgEl.parentElement.removeChild(characterImgEl);
};

export const renderCountdown = (timer) => {
    elements.timer.style.visibility = "unset";
    elements.timer.innerHTML = timer;

};


export const renderGo = () => {
    elements.timer.innerHTML = "Go";
};

export const removeCountdown = () => {
    elements.timer.style.visibility = "hidden";
};

const renderUsersInput = () => {
    elements.usersInput.style.visibility = "unset";
};

export const removeUsersInput = () => {
    elements.usersInput.style.visibility = "hidden";
};

export const renderLeaderBoard = (leaderBoard, totalTime) => {
    let html;
    if (leaderBoard.length <= 1) {
        html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].finishTime + '</p></div><div class="Two"><p>2. - </p></div><div class="Three"><p>3. - </p></div></div><div class="play-again-btn"><input type="button" class="play-btn" value="PLAY AGAIN"></div></div></div>';
    } else if (leaderBoard.length === 2) {
        html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].finishTime + '</p></div><div class="Two"><p>2. ' + leaderBoard[1].name + ' ' + leaderBoard[1].finishTime + '</p></div><div class="Three"><p>3. - </p></div></div><div class="play-again-btn"><input type="button" class="play-btn" value="PLAY AGAIN"></div></div></div>';
    } else {
        html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].finishTime + '</p></div><div class="Two"><p>2. ' + leaderBoard[1].name + ' ' + leaderBoard[1].finishTime + '</p></div><div class="Three"><p>3. ' + leaderBoard[2].name + ' ' + leaderBoard[2].finishTime + '</p></div></div><div class="play-again-btn"><input type="button" class="play-btn" value="PLAY AGAIN"></div></div></div>'
    }
    elements.leaderBoardContainer.insertAdjacentHTML("beforeend", html);
}

const removeLeaderBoard = () => {

    const gameEnd = document.querySelector('.game-end');

    gameEnd.parentElement.removeChild(gameEnd);

};

export const setupPlayAgain = (e) => {
    const playAgainBtn = getPlayAgainBtn();
    if (e.target === playAgainBtn) {
        removeLeaderBoard();
        renderUsersInput();
        removeCharacter();
    }
};

export const resetWalls = () => {
    const strings = getStrings();

    changeWallsLoopAdd([strings.borderLeft, 1, 3, 5, 7, 8, 10, 11, 12, 13, 17, 18, 19, 22, 24, 25, 28, 29, 31, 35], [strings.borderTop, 1, 2, 3, 4, 5, 6, 14, 15, 20, 21, 22, 25, 26, 29, 32, 33, 36], [strings.borderRight, 2, 4, 6, 7, 9, 10, 11, 12, 16, 17, 18, 21, 23, 24, 27, 28, 20, 34, 36], [strings.borderBottom, 1, 8, 9, 14, 15, 16, 19, 20, 23, 26, 27, 30, 31, 32, 33, 34, 35, 36]);

    changeWallsLoopRemove([strings.borderBottom, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 17, 18, 21, 22, 24, 25, 28, 29], [strings.borderRight, 1, 3, 5, 8, 13, 14, 19, 20, 22, 25, 26, 29, 31, 32, 33, 35], [strings.borderTop, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 23, 24, 27, 28, 30, 31, 34, 35], [strings.borderLeft, 2, 4, 6, 9, 15, 16, 20, 21, 23, 26, 27, 30, 32, 33, 34, 36])

};



