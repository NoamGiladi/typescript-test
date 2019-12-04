var BasicDate = /** @class */ (function () {
    function BasicDate(y, m, d) {
        this.Year = y;
        this.Month = m;
        this.Day = d;
    }
    Object.defineProperty(BasicDate.prototype, "Day", {
        get: function () {
            return this._day;
        },
        set: function (val) {
            if (val >= 1 && val <= 31) {
                this._day = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "Year", {
        get: function () {
            return this._year;
        },
        set: function (val) {
            if (val >= 2020 && val <= 2050) {
                this._year = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "Month", {
        get: function () {
            return this._month;
        },
        set: function (val) {
            if (val >= 1 && val <= 12) {
                this._month = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    BasicDate.prototype.toString = function () {
        return this.Day + "/" + this.Month + "/" + this.Year + " ";
    };
    return BasicDate;
}());
//# sourceMappingURL=BasicDate.js.map