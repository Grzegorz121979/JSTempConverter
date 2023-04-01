let resultEl = document.getElementById("celsius_result-el")

function convertToFahrenheit() {
    let celsius = document.getElementById("celsius-el").value
    let result = (parseInt(celsius) * 9 / 5) + 32
    resultEl.innerHTML =  result   
}

function convertToCelsius() {

}


    