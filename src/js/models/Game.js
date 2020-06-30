export default class Game {

    constructor() {
    }
   async delay(ms) {
        return await new Promise(resolve => setTimeout(resolve, ms));
      }

    getStartTime() {
        const currTime = new Date();
        this.startTime = currTime.getTime();
        
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
        if(addOrSubtract === '-') {
            res = parseInt(this.currentPosition) - requiredNum;
        } else {
            res = parseInt(this.currentPosition) + requiredNum;
        }
        res = `box-${res}`;
        this.requiredPos = res;
    };
    
    
  
}


