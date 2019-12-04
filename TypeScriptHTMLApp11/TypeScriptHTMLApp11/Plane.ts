class Plane implements IFly {
    private _pilot: string;

    public set Pilot(val: string) {
        this._pilot = val;
    }

    public get Pilot(): string {
        return this._pilot;
    }

    private _airport: string;

    public set Airport(val: string) {
        this._airport = val;
    }

    public get Airport(): string {
        return this._airport;
    }

    private _destination: string;

    public set Destination(val: string) {
        this._destination = val;
    }

    public get Destination(): string {
        return this._destination;
    }

    fly(speed: number): void {
        document.write("speed:" + speed + "<br/>");
    }
    land(): boolean {
        document.write("Landed<br/>");
        return true;
    }


    constructor(p: string, a: string, d: string) {
        this.Pilot = p;
        this.Airport = a;
        this.Destination = d;
    }
}

let x:number = 5;
let y:number = 6;
let z: number;
