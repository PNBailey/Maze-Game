import { elements } from './base'
import { characters } from './base'

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

export const changeWalls = (addOrRemove, side, ...boxes) => {
    const boxEls = getBoxArrEl(...boxes);
    if (side === "top" && addOrRemove === "add") {
        boxEls.forEach((e) => {
            e.classList.add("borderTop");
        });
    } else if (side === "top" && addOrRemove === "remove") {
        boxEls.forEach((e) => {
            e.classList.remove("borderTop");
        });
    } else if (side === "right" && addOrRemove === "add") {
        boxEls.forEach((e) => {
            e.classList.add("borderRight");
        });
    } else if (side === "right" && addOrRemove === "remove") {
        boxEls.forEach((e) => {
            e.classList.remove("borderRight");
        });
    } else if (side === "bottom" && addOrRemove === "add") {
        boxEls.forEach((e) => {
            e.classList.add("borderBottom");
        });
    } else if (side === "bottom" && addOrRemove === "remove") {
        boxEls.forEach((e) => {
            e.classList.remove("borderBottom");
        });
    } else if (side === "left" && addOrRemove === "add") {
        boxEls.forEach((e) => {
            e.classList.add("borderLeft");
        });
    } else if (side === "left" && addOrRemove === "remove") {
        boxEls.forEach((e) => {
            e.classList.remove("borderLeft");
        });
    }

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

export const removeCharacter = () => {
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

export const renderUsersInput = () => {
    
    let html = ` <div class="users-input animated slideInUp">
    <div class="users-name">
        <input class="users-name-input" type="text" name="Name" placeholder="Enter Name" required>
    </div>
    <div class="select-character-text">
        <p>Select Character</p>
    </div>
    <div class="character-select">
        <ion-icon class="left" name="arrow-dropleft-circle"></ion-icon>
        <ion-icon class="right" name="arrow-dropright-circle"></ion-icon>
        <img class="character-img trump" src="images/trump.png">
    </div>
    <div class="start-button">
        <input type="button" value="START">
    </div>
</div> `

elements.popUpContainer.insertAdjacentHTML("beforeend", html);

};

export const removeUsersInput = () => {
    elements.usersInput.parentElement.removeChild(elements.usersInput);
};

export const renderLeaderBoard = (leaderBoard, totalTime) => {
    let html;
    if (leaderBoard.length <= 1) {
        html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].finishTime + '</p></div><div class="Two"><p>2. - </p></div><div class="Three"><p>3. - </p></div></div><div class="play-again-btn"><input type="button" class="play-btn" value="PLAY AGAIN"></div></div></div>';
    } else if (leaderBoard.length === 2) {
        html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].finishTime + '</p></div><div class="Two"><p>2. ' + leaderBoard[1].name + ' ' + leaderBoard[1].finishTime + '</p></div><div class="Three"><p>3. - </p></div></div><div class="play-btn"><input type="button" class="play-again-btn" value="PLAY AGAIN"></div></div></div>';
    } else {
        html = '<div class="game-end animated slideInUp"><div class="congratulations-text"><p>CONGRATULATIONS!</p></div><div class="time-text row"><p>Your Time Was</p></div><div class="time"><p>' + totalTime + '</p></div><div class="leader-board"><div class="one"><p>1. ' + leaderBoard[0].name + ' ' + leaderBoard[0].finishTime + '</p></div><div class="Two"><p>2. ' + leaderBoard[1].name + ' ' + leaderBoard[1].finishTime + '</p></div><div class="Three"><p>3. ' + leaderBoard[2].name + ' ' + leaderBoard[2].finishTime + '</p></div></div><div class="play-again-btn"><input type="button" class="play-btn" value="PLAY AGAIN"></div></div></div>'
    }
    elements.leaderBoardContainer.insertAdjacentHTML("beforeend", html);
}

export const removeLeaderBoard = () => {

    const gameEnd = document.querySelector('.game-end');

    gameEnd.parentElement.removeChild(gameEnd);

};

export const setupPlayAgain = (e) => {
    const playAgainBtn = document.querySelector('.play-btn');
    if(e.target === playAgainBtn) {
        removeLeaderBoard();
        renderUsersInput();
        removeCharacter();
    }


    

};


// document.querySelector(DOMstrings.gameEnd).style.visibility = "unset";

