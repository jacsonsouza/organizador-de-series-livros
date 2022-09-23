/* Teste seus conhecimentos*/

document.getElementById("bt-questions").onclick = function () {
  let confirma = confirm("Está preparado para testar seus conhecimentos?");

  while (confirma) {
    var answer = prompt("Qual o nome da terceira esposa do protagonista?");

    if (checkAnswer(answer)) {
      alert("Muito bem, está sabendo tudo sobre a obra!!!");
    } else {
      alert("Que pena, você errou. Porém nada que uma releitura não resolva.");
    }

    confirma = confirm("Quer continuar?");
  }
};

let checkAnswer = (answer) => {
  if (answer == "Eris") return true;

  return false;
};
