/* eslint-disable prettier/prettier */
class TimeIS {
  constructor(hours = 0, minutes = 0, seconds = 0) {
    const toMinMax = (num, min, max) =>
      num < min ? min : num > max ? max : num;
    this.h = toMinMax(hours, 0, 23);
    this.m = toMinMax(minutes, 0, 59);
    this.s = toMinMax(seconds, 0, 59);
  }

  static fromZero() {
    return new TimeIS(0, 0, 0);
  }

  static fromValues(hours, minutes, seconds) {
    return new TimeIS(hours, minutes, seconds);
  }

  static fromDate(date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return new TimeIS(h, m, s);
  }

  getTime() {
    const format = (num) => (num < 10 ? '0' : '') + num;
    const h = format(this.h >= 12 ? this.h - 12 : this.h);
    const m = format(this.m);
    const s = format(this.s);
    const ampm = this.h >= 12 ? 'PM' : 'AM';
    return `${[h, m, s].join(':')} ${ampm}`;
  }

  add(timeObj) {
    this.s += timeObj.s;
    this.m += ~~(this.s / 60) + timeObj.m;
    this.h += ~~(this.m / 60) + timeObj.h;
    this.s %= 60;
    this.m %= 60;
    this.h %= 24;
    return this;
  }

  sub(timeObj) {
    this.s -= timeObj.s;
    this.m -= (this.s < 0 ? 1 : 0) + timeObj.m;
    this.s = this.s < 0 ? 60 + this.s : this.s;
    this.h -= (this.m < 0 ? 1 : 0) + timeObj.h;
    this.m = this.m < 0 ? 60 + this.m : this.m;
    this.h = this.h < 0 ? 24 + this.h : this.h;
    return this;
  }

  static add(timeObj1, timeObj2) {
    return timeObj1.add(timeObj2);
  }

  static sub(timeObj1, timeObj2) {
    return timeObj1.sub(timeObj2);
  }
}

export default TimeIS;
