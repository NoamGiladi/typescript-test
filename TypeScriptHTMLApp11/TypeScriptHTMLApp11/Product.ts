class Product {
    private _name: string;

    public set Name(val: string) {
        this._name = val;
    }

    public get Name(): string {
        return this._name;
    }

    private _price: number;

    public set Price(val: number) {
        this._price = val;
    }

    public get Price(): number {
        return this._price;
    }

    private _expDate: FullTime;

    public set ExpDate(val: FullTime) {
        this._expDate = val;
    }

    public get ExpDate(): FullTime {
        return this._expDate;
    }

    constructor(y: number, m: number, d: number, h: number, min: number, s: number, name: string, price: number) {
        this.ExpDate = new FullTime(y, m, d, h, min, s);
        this.Name = name;
        this.Price = price;
    }

    toString() {
        return `Product name: ${this.Name}<br/>Price: ${this.Price}<br/> Experation date: ${this.ExpDate}<br/>`
    }
}