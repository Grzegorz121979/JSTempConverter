let resultEl = document.getElementById("result-el")

function convert() {
    let celsius = document.getElementById("celsius-el").value
    let result = (parseInt(celsius) * 9 / 5) + 32
    resultEl.innerHTML =  result
}


    