var Bird = /** @class */ (function () {
    function Bird(t, a, c) {
        this.Type = t;
        this.Age = a;
        this.Color = c;
    }
    Object.defineProperty(Bird.prototype, "Type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "Age", {
        get: function () {
            return this._age;
        },
        set: function (val) {
            if (val > 0) {
                this._age = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "Color", {
        get: function () {
            return this._color;
        },
        set: function (val) {
            this._color = val;
        },
        enumerable: true,
        configurable: true
    });
    Bird.prototype.fly = function (speed) {
        document.write("speed:" + speed + "<br/>");
    };
    Bird.prototype.land = function () {
        document.write("Landed<br/>");
        return true;
    };
    return Bird;
}());
//# sourceMappingURL=Bird.js.map