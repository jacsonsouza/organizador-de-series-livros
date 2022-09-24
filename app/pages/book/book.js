/* Teste seus conhecimentos*/
let contador = 0;
let pontuação = 0;

document.getElementById("bt-questions").onclick = function () {
  let confirma = confirm("Está preparado para testar seus conhecimentos?");

  while (confirma && contador != questions.length) {
    var answer = prompt(questions[contador]);

    if (checkAnswer(answer)) {
      contador++;
      pontuação++;
      alert("Muito bem, você acertou!");
    } else {
      contador++;
      alert("Que pena, você errou!");
    }

    confirma = confirm("Quer continuar?");
  }

  alert(`Você teve ${pontuaçãoTotal()} acertos.`);
};

let questions = [];
let answers = [];

(function () {
  questions[0] = "Qual o nome do protagonista?";
  questions[1] = "Para onde o Rudeus e Eris foram mandados no incidente?";
  questions[2] = "Qual o nome da segunda esposa do protagonista?";

  answers[0] = "Rudeus Grayrat";
  answers[1] = "Continente demoníaco";
  answers[2] = "Roxy";
})();

let checkAnswer = (answer) => {
  if (answer == answers[contador]) return true;

  return false;
};

let pontuaçãoTotal = function () {
  return pontuação;
};
