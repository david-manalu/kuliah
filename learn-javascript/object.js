function object() {
    var carType = ["Sedan", "Big"];
    var price = [2500000000, 3500000000];
    var color = ["red", "blue"];
    var year = [2000, 2021];
    var car = {
        type: carType,
        price: price,
        color: color
    };
    car.color[1] = "Orange";
    car.year = year;
    for (let i = 0; i < carType.length; i++) {
        console.log("Type : " + car.type[i]);
        console.log("Price : " + car.price[i]);
        console.log("Color : " + car.color[i]);
        console.log("Year : " + car.year[i]);
        console.log("==========================");
    }
}
object();