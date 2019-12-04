var Kite = /** @class */ (function () {
    function Kite(c, p) {
        this.Color = c;
        this.Price = p;
    }
    Object.defineProperty(Kite.prototype, "Color", {
        get: function () {
            return this._color;
        },
        set: function (val) {
            this._color = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kite.prototype, "Price", {
        get: function () {
            return this._price;
        },
        set: function (val) {
            this._price = val;
        },
        enumerable: true,
        configurable: true
    });
    Kite.prototype.fly = function (speed) {
        document.write("speed:" + speed + "<br/>");
    };
    Kite.prototype.land = function () {
        document.write("Landed<br/>");
        return true;
    };
    return Kite;
}());
//# sourceMappingURL=Kite.js.map