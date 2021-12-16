function spread() {
    var value1 = [1,2,3,4,5];
    var value2 = [6,7,8,9];

    var valueJoin = [...value1,...value2,10,11,12,13,14,15];

    console.log(value1);
    console.log(value2);
    console.log(valueJoin);
}

spread();