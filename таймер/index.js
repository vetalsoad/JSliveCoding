"use strict";
const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      this.secondsPassed += 1;
      console.log(this.secondsPassed);
    }, 1000);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

/* const obj = {
  firstName: 'James',
  printname() {
    console.log(this);
    console.log(this);
  },
};

obj.printname(); */

// test data

timer.startTimer();
timer.getTime();
timer.stopTimer(); 
timer.resetTimer();
