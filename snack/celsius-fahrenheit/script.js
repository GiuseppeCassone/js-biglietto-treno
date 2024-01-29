function celsiusToFahrenheit(celsius) {
    return fahrenheit = (celsius * 9/5) + 32;
  }

const celsiusDegrees = prompt("Indica i gradi Celsius che vuoi convertire");
const fahrenheitDegrees = celsiusToFahrenheit(celsiusDegrees);

document.getElementById(`converted`).innerHTML = (`${celsiusDegrees}°C corrispondono a ${fahrenheitDegrees.toFixed()}°F`);