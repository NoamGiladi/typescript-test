var Plane = /** @class */ (function () {
    function Plane(p, a, d) {
        this.Pilot = p;
        this.Airport = a;
        this.Destination = d;
    }
    Object.defineProperty(Plane.prototype, "Pilot", {
        get: function () {
            return this._pilot;
        },
        set: function (val) {
            this._pilot = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plane.prototype, "Airport", {
        get: function () {
            return this._airport;
        },
        set: function (val) {
            this._airport = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plane.prototype, "Destination", {
        get: function () {
            return this._destination;
        },
        set: function (val) {
            this._destination = val;
        },
        enumerable: true,
        configurable: true
    });
    Plane.prototype.fly = function (speed) {
        document.write("speed:" + speed + "<br/>");
    };
    Plane.prototype.land = function () {
        document.write("Landed<br/>");
        return true;
    };
    return Plane;
}());
var x = 5;
var y = 6;
var z;
//# sourceMappingURL=Plane.js.map