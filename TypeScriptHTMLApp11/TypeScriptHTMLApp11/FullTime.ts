/**@class FullTime */
class FullTime extends BasicDate {
    private _hour: number;

    public set Hour(val: number) {
        if (val >= 0 && val <= 23) {
            this._hour = val;
        }
    }

    public get Hour(): number {
        return this._hour;
    }

    private _min: number;

    public set Min(val: number) {
        if (val >= 0 && val <= 60) {
            this._min = val;
        }
    }

    public get Min(): number {
        return this._min;
    }

    private _sec: number;

    public set Sec(val: number) {
        if (val >= 0 && val <= 59) {
            this._sec = val;
        }
    }

    public get Sec(): number {
        return this._sec;
    }
    /**
     * @constructor test
     * @param y
     * @param m
     * @param d
     * @param h
     * @param min
     * @param s
     */
    constructor(y: number, m: number, d: number, h: number, min: number, s: number) {
        super(y, m, d);
        this.Hour = h;
        this.Min = min;
        this.Sec = s;
    }

    toString(): string {
        return super.toString() + `${this.Hour}:${this.Min}:${this.Sec}<br/>`
    }
}