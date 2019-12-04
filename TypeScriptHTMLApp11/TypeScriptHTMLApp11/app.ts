//function createIFly(): IFly {
//    let rng: number = Math.round(Math.random() * 2);
//    switch (rng) {

//        case 0:
//            let bird: Bird = new Bird("Big", 40, "Yellow");
//            return bird;


//        case 1:
//            let plane: Plane = new Plane("Ace", "El-Al", "None of your business");
//            return plane;

//        case 2:
//            let kite: Kite = new Kite("Red", 10);
//            return kite;
//    }
//}

//let flyArray: IFly[] = new Array<IFly>(10);
//for (let i = 0; i < flyArray.length; i++) {
//    flyArray[i] = createIFly();
//}

//for (let i = 0; i < flyArray.length; i++) {
//    flyArray[i].fly(10);
//    flyArray[i].land();
//}
//console.table(flyArray);

let p: Product = new Product(2025, 5, 12, 12, 40, 20, "bamba", 5);
document.write(p + "<br/>");