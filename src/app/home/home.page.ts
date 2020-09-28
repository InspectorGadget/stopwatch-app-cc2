import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  // initial state 
  timer: string = '00:00:00';
  timeState: any = false;
  totalSeconds: number;

  // we need to get time from label
  // add 2 functions start and stop
  // we need calculate the total second
  // hours*3600 + mins*60 + 20
  // totalSeconds - 1
  // if it reach to 0 the timer will stop at 00:00:00
  // ( ) event data binding
  // [ ] properties data binding

  // initial stage
  stopwatch: string = '00:00:00';
  stopwatchState: any = false;
  stopwatchtotalSeconds: number = 0;

  startTimer() {
    // timer = '01:02:03'
    // timeSplit = ['01','02','03']
    // javascript split return array of string
    const timeSplit = this.timer.split(':');
    // hours = 1
    // tslint:disable-next-line: radix
    const hours: number = parseInt(timeSplit[0]);
    // minutes = 2
    // tslint:disable-next-line: radix
    const minutes: number = parseInt(timeSplit[1]);
    // seconds = 3
    // tslint:disable-next-line: radix
    const seconds: number = parseInt(timeSplit[2]);

    // parseInt convert string to Integer
    // 3600 + 120 + 3
    // totalSeconds = 3723

    this.totalSeconds = Math.floor(hours * 3600) + Math.floor(minutes * 60) + seconds;

    // Arrow function () => {}
    // function start() { }
    // '0' === 0 return false 
    if (this.totalSeconds !== 0) {
      this.timeState = setInterval(() => {
        // 3732 -> HH:mm:ss
        this.totalSeconds--;
        this.timer = this.displayTime(this.totalSeconds)
        if (this.totalSeconds === 0) { this.stopTimer(); }
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timeState);
    this.timeState = false;
  }

  // format the time 'HH:mm:ss'
  displayTime(time) {
    const hours: number = Math.floor(time / 3600);
    const minutes: number = Math.floor((time % 3600) / 60);
    const seconds: number = Math.floor((time % 60) % 60);
    // 'HH:mm:ss'
    const realTime = this.format(hours) + ':' + this.format(minutes) + ':' + this.format(seconds);
    return realTime;
  }

  // function to format +0
  format(time) {
    if (time < 10) {
      // '0' + 1 = '01'
      // 0 + 1 = 1
      return '0' + time;
    }
    else { return time; }
  }

  startStopwatch() {
    this.stopwatchState = setInterval(() => {
      this.stopwatchtotalSeconds++;
      this.stopwatch = this.displayTime(this.stopwatchtotalSeconds);
    }, 1000);
  }

  stopStopwatch() {
    clearInterval(this.stopwatchState);
    this.stopwatchState = false;
    this.stopwatch = '00:00:00'
    this.stopwatchtotalSeconds = 0;
  }

}
