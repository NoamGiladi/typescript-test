class BasicDate {
    private _day: number;

    public set Day(val: number) {
        if (val >= 1 && val <= 31) {
            this._day = val;
        }
    }

    public get Day(): number {
        return this._day;
    }

    private _year: number;

    public set Year(val: number) {
        if (val >= 2020 && val <= 2050) {
            this._year = val;
        }
    }

    public get Year(): number {
        return this._year;
    }

    private _month: number;

    public set Month(val: number) {
        if (val >= 1 && val <= 12) {
            this._month = val;
        }
    }

    public get Month(): number {
        return this._month;
    }

    constructor(y: number, m: number, d: number) {
        this.Year = y;
        this.Month = m;
        this.Day = d;
    }

    toString() {
        return `${this.Day}/${this.Month}/${this.Year} `
    }
}