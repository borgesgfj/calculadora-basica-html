function resultado() {
  let n1 = parseInt(document.getElementById("cNum1").value);
  let n2 = parseInt(document.getElementById("cNum2").value);
  let selecOper = document.getElementById("cOperacoes").value;
  let calc = 0;
  console.log(n1, n2, selecOper);
  if (selecOper == "soma") {
    calc = n1 + n2;
  } else if (selecOper == "sub") {
    calc = n1 - n2;
  } else if (selecOper == "division") {
    calc = n1 / n2;
  } else {
    calc = n1 * n2;
  }
  console.log(calc)
  document.getElementById("cResult").value = calc;
}