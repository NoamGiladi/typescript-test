var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**@class FullTime */
var FullTime = /** @class */ (function (_super) {
    __extends(FullTime, _super);
    /**
     * @constructor test
     * @param y
     * @param m
     * @param d
     * @param h
     * @param min
     * @param s
     */
    function FullTime(y, m, d, h, min, s) {
        var _this = _super.call(this, y, m, d) || this;
        _this.Hour = h;
        _this.Min = min;
        _this.Sec = s;
        return _this;
    }
    Object.defineProperty(FullTime.prototype, "Hour", {
        get: function () {
            return this._hour;
        },
        set: function (val) {
            if (val >= 0 && val <= 23) {
                this._hour = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "Min", {
        get: function () {
            return this._min;
        },
        set: function (val) {
            if (val >= 0 && val <= 60) {
                this._min = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "Sec", {
        get: function () {
            return this._sec;
        },
        set: function (val) {
            if (val >= 0 && val <= 59) {
                this._sec = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    FullTime.prototype.toString = function () {
        return _super.prototype.toString.call(this) + (this.Hour + ":" + this.Min + ":" + this.Sec + "<br/>");
    };
    return FullTime;
}(BasicDate));
//# sourceMappingURL=FullTime.js.map