import { elements } from './base'
import { characters } from './base'
import { getCurrentBoxEl } from './base'
import { getRequiredBoxEl } from './base'
import { getCharacterImg } from './base'

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








