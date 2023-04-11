/*let resultFahrenheitEl = document.getElementById("celsius_result-el")
let resultCelsiusEl = document.getElementById("fahrenheit_result-el")

function convertToFahrenheit() {
    let celsius = document.getElementById("celsius-el").value
    let result = (parseFloat(celsius) * 9 / 5) + 32
    resultFahrenheitEl.innerHTML =  result.toFixed(2) + "F°"  
}

function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit-el").value
    let result = (parseFloat(fahrenheit) - 32) * 5 / 9
    resultCelsiusEl.innerHTML = result.toFixed(2) + "C°"
}

function clearCelsius() {
    document.getElementById("celsius-el").value = ""
    resultFahrenheitEl.innerHTML = ""
}

function clearFahrenheit() {
    document.getElementById("fahrenheit-el").value = ""
    resultCelsiusEl.innerHTML = ""
}*/

let radio = document.getElementsByName("degree")
let resultEl = document.getElementById("result")

function convert() {
    let value = document.getElementById("value").value

    if (radio[0].checked) {
        let result = (parseFloat(value) * 9 / 5) + 32
        resultEl.innerHTML = result.toFixed(2) + "F°"
    } 
    
    if (radio[1].checked) {
        let result = (parseFloat(value) - 32) * 5 / 9
        resultEl.innerHTML = result.toFixed(2) + "C°"
    }
}

function clearResult() {
    document.getElementById("value").value = ""
    resultEl.innerHTML = "" 
}