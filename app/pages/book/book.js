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

/* setInterval */
let h = 0;
let m = 0;
let s = 0;

function startRead(op) {
  let selecionado = op.options[op.selectedIndex].innerHTML;

  if (selecionado == "Lendo") {
    var key = setInterval(function () {
      document.getElementById(
        "time-read"
      ).innerHTML = `Duração da leitura: ${h}:${m}:${s}`;

      s++;

      if (s == 60) {
        m++;
        s = 0;
      }

      if (m == 60) {
        h++;
        m = 0;
      }

      let selecionado = op.options[op.selectedIndex].innerHTML;

      if (selecionado == "Completo" || selecionado == "Pausado") {
        clearInterval(key);
      }
    }, 1000);
  }
}
