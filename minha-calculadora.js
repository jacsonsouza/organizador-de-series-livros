function onSubmit() {
  const n1 = +document.getElementById("number1Imput").value;
  const n2 = +document.forms[0].elements[1].value;
  const operador = document.querySelector("#operatorSelect").value;
  const resultado = calcula(n1, n2, operator);
  alert(resultado);
}

let calcula = function (a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      console.log("Operador errado");
  }
};
