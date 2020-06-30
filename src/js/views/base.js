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


