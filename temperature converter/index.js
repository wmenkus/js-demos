document.getElementById("submitButton").onclick = function() {
    let temp;
    let message;
    let unit;
    temp = Number(document.getElementById("textBox").value);

    if(document.getElementById("cButton").checked) {
        message = toCelsius(temp);
        unit = "celsius";
    }
    else if(document.getElementById("fButton").checked) {
        message = toFahrenheit(temp);
        unit = "fahrenheit";
    }
    else {
        message = "Select a unit";
    }
    message = message.toLocaleString(undefined, {style: "unit", unit: unit});
    document.getElementById("tempLabel").innerHTML = message;
}

function toCelsius(temp) {
    return (temp - 32) * 5/9;
}

function toFahrenheit(temp) {
    return (temp * 9/5) + 32;
}