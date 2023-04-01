let resultFahrenheitEl = document.getElementById("celsius_result-el")
let resultCelsiusEl = document.getElementById("fahrenheit_result-el")

function convertToFahrenheit() {
    let celsius = document.getElementById("celsius-el").value
    let result = (parseInt(celsius) * 9 / 5) + 32
    resultFahrenheitEl.innerHTML =  result   
}

function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit-el").value
    let result = (parseInt(fahrenheit) - 32) * 5 / 9
    resultCelsiusEl.innerHTML = result
}


    