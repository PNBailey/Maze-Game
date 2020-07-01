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
    finishBox: document.querySelector('.box36'),
    popUpContainer: document.querySelector('.container'),
    leaderBoardContainer: document.querySelector('.end-container'),
    // playAgainBtn: document.querySelector('.play-btn'),
    
};


export const characters = ["images/trump.png", "images/Boris.png"];

export const getNewElements = () => {
    const newElements = {
       playAgainBtn: document.querySelector('.play-btn'),
       characterSelect: document.querySelector('.character-select'),
       startButton: document.querySelector('.start-button')
    }
    return newElements;
};

















