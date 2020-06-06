export class AnalogClock {
    constructor(hours, minutes, seconds) {
        this.hoursElement = hours;
        this.minutesElement = minutes;
        this.secondsElement = seconds;
    }
    update(time) {
        let hrs = time.getHours() % 12;
        let mins = time.getMinutes();
        let secs = time.getSeconds();
        this.hoursElement.groupTransform.rotate.angle = (hrs + mins / 60) * 30;
        this.minutesElement.groupTransform.rotate.angle = mins * 6;
        this.secondsElement.groupTransform.rotate.angle = secs * 6;
    }
}