const trafficLight = () => {
    var light = "red";

    switch (light) {
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("Slow");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            break;
    }
}

trafficLight();

