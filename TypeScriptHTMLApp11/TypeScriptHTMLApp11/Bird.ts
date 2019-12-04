class Bird implements IFly {
    private _type: string;

    public set Type(val: string) {
        this._type = val;
    }

    public get Type(): string {
        return this._type;
    }

    private _age: number;

    public set Age(val: number) {
        if (val > 0) {
            this._age = val;
        }
    }

    public get Age(): number {
        return this._age;
    }

    private _color: string;

    public set Color(val: string) {
        this._color = val;
    }

    public get Color(): string {
        return this._color;
    }

    fly(speed: number): void {
        document.write("speed:" + speed+"<br/>");
    }
    land(): boolean {
        document.write("Landed<br/>");
        return true;
    }

    constructor(t: string, a: number, c: string) {
        this.Type = t;
        this.Age = a;
        this.Color = c;
    }
}