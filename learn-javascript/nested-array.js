function nestedArray() {
    var fruit = [
        ["Orange", "Manggo", "BlackBerry"],
        ["Apple", "Guava", "Avocado"]
    ];
    for (let i = 0; i < fruit.length; i++) {
        for (let j = 0; j < fruit[i].length; j++) {
            console.log(fruit[i][j] + " in index " + i + " " + j);
        }
    }
}
nestedArray();