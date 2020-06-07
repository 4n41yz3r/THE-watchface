export class AnalogClock {
  constructor(hours, minutes, seconds) {
    this.hoursNode = hours;
    this.minutesNode = minutes;
    this.secondsNode = seconds;
  }
  update(time) {
    let hrs = time.getHours() % 12;
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    this.hoursNode.groupTransform.rotate.angle = (hrs + mins / 60) * 30;
    this.minutesNode.groupTransform.rotate.angle = mins * 6;
    this.secondsNode.groupTransform.rotate.angle = secs * 6;
  }
}