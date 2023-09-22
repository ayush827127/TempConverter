// Function to convert temperatures
function convertTemperature() {
    const temperatureInput = document.getElementById("temperature-input").value;
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    let result;
    if (fromUnit === toUnit) {
        result = temperatureInput;
    }
    else {


        if (fromUnit === "celsius") {
            if (toUnit === "fahrenheit") {
                result = (temperatureInput * 9 / 5) + 32;
            } else if (toUnit === "kelvin") {
                result = parseFloat(temperatureInput) + 273.15;
            } else {
                result = temperatureInput;
            }
        } else if (fromUnit === "fahrenheit") {
            if (toUnit === "celsius") {
                result = (temperatureInput - 32) * 5 / 9;
            } else if (toUnit === "kelvin") {
                result = ((temperatureInput - 32) * 5 / 9) + 273.15;
            } else {
                result = temperatureInput;
            }
        } else if (fromUnit === "kelvin") {
            if (toUnit === "celsius") {
                result = temperatureInput - 273.15;
            } else if (toUnit === "fahrenheit") {
                result = ((temperatureInput - 273.15) * 9 / 5) + 32;
            } else {
                result = temperatureInput;
            }
        } else {
            result = temperatureInput;
        }
    }
console.log(typeof result)
    document.getElementById("result").textContent = result + " " + toUnit;
}

// Event listener for the Convert button
document.getElementById("convert-btn").addEventListener("click", convertTemperature);
