var Product = /** @class */ (function () {
    function Product(y, m, d, h, min, s, name, price) {
        this.ExpDate = new FullTime(y, m, d, h, min, s);
        this.Name = name;
        this.Price = price;
    }
    Object.defineProperty(Product.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Price", {
        get: function () {
            return this._price;
        },
        set: function (val) {
            this._price = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ExpDate", {
        get: function () {
            return this._expDate;
        },
        set: function (val) {
            this._expDate = val;
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.toString = function () {
        return "Product name: " + this.Name + "<br/>Price: " + this.Price + "<br/> Experation date: " + this.ExpDate + "<br/>";
    };
    return Product;
}());
//# sourceMappingURL=Product.js.map