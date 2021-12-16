const numberChecker = () => {
    var nilai = "2";

    if (nilai == 2) {
        console.log("Number 2");
        if (nilai === 2) {
            console.log("Number 2 with integer");
        }else{
            console.log("Number 2 with String");
        }
    }else if (nilai === 3) {
        console.log("Number 3");
    }else {
        console.log("no a number");
    }
}

numberChecker();