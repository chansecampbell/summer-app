export default class MainController {
    constructor() {
        this.dateNow = new Date(Date.now());
        this.hoursLeftToday = (24 - this.dateNow.getHours());
        this.summerBegins = new Date("2017,06,29");
        this.summerEnds = new Date("2017,09,21");
        this.userAge;
        this.summerCount = "...";
    }
    
    summerDaysLeft() {
        this.oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        this.nowUntilSummerBegins = Math.round(Math.abs((this.dateNow.getTime() - this.summerBegins.getTime())/(this.oneDay)));
        this.nowUntilSummerEnds = Math.round(Math.abs((this.dateNow.getTime() - this.summerEnds.getTime())/(this.oneDay)));

        return this.nowUntilSummerBegins + " days, " + this.hoursLeftToday + " hours left until Summer finally begins! " + this.nowUntilSummerEnds + " days, " + this.hoursLeftToday + " hours left until Summer ends!";
    }

    calculateSummers() {
        this.summerCount = this.userAge * 3;
    }
}