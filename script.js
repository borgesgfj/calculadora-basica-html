let n1 = parseInt(document.getElementById("cNum1").value)
let n2 = parseInt(document.getElementById("cNum2").value)

function resultado(numero1, numero2) {
let selecOper = document.getElementById("cOperacoes").value
let calc = 0
if (selecOper == "soma") {
calc = numero1 + numero2
} else if (selecOper == "sub") {
calc = numero1 - numero2
} else if (selecOper == "division") {
calc = numero1 / numero2
} else
calc = numero1 * numero2
return calc
}

document.getElementById("cResult").value = resultado(n1, n2)