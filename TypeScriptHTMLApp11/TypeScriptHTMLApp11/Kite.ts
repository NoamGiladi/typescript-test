class Kite implements IFly {
    private _color: string;

    public set Color(val: string) {
        this._color = val;
    }

    public get Color(): string {
        return this._color;
    }

    private _price: number;

    public set Price(val: number) {
        this._price = val;
    }

    public get Price(): number {
        return this._price;
    }

    fly(speed: number): void {
        document.write("speed:" + speed + "<br/>");
    }
    land(): boolean {
        document.write("Landed<br/>");
        return true;
    }

    constructor(c: string, p: number) {
        this.Color = c;
        this.Price = p;
    }
}