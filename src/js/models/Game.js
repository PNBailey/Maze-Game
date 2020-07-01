export default class Game {


    getStartTime() {
        const currTime = new Date();
        this.startTime = currTime.getTime();

    }

    calcFinishTime() {
        let finTime = new Date();
        let finishTime = finTime.getTime();
        let total = ((finishTime - this.startTime) / 1000);
        this.totalTime = total.toFixed(2);
    }

    getCurrentPosition(boxes) {
        let res = null;
        boxes.forEach((curr) => {
            if (typeof curr.children[0] !== 'undefined' && curr.children[0]) {
                const splitID = curr.id.split('-');
                res = splitID[1];
            }
        })
        this.currentPosition = res;

    };

    getRequiredPosition(requiredNum, addOrSubtract) {
        let res = null;
        if (addOrSubtract === '-') {
            res = parseInt(this.currentPosition) - requiredNum;
        } else {
            res = parseInt(this.currentPosition) + requiredNum;
        }
        res = `box-${res}`;
        this.requiredPos = res;
    };


    addLeaderBoard(newLeaderBoard) {
        this.leaderBoard = newLeaderBoard;
    };

    
};


