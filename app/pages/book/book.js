"use strict";

/* Teste seus conhecimentos*/

let questions = [];
let answers = [];

let contador = 0;
let pontuação = 0;

let checkAnswer = (answer) => {
  if (answer === answers[contador]) return true;

  return false;
};

let pontuaçãoTotal = function () {
  return pontuação;
};

document.getElementById("bt-questions").onclick = function () {
  contador = 0;
  pontuação = 0;
  let confirma = window.confirm(
    "Está preparado para testar seus conhecimentos?"
  );

  while (confirma && contador !== questions.length) {
    var answer = window.prompt(questions[contador]);
    answer = answer.toLowerCase();
    if (checkAnswer(answer)) {
      contador++;
      pontuação++;
      window.alert("Muito bem, você acertou!");
    } else {
      contador++;
      window.alert("Que pena, você errou!");
    }
  }

  window.alert(`Você teve ${pontuaçãoTotal()} acertos.`);
};

(function () {
  questions[0] = "Qual o nome do protagonista?";
  questions[1] = "Para onde o Rudeus e Eris foram mandados no incidente?";
  questions[2] = "Qual o nome da segunda esposa do protagonista?";

  answers[0] = "rudeus grayrat";
  answers[1] = "continente demoníaco";
  answers[2] = "roxy";
})();

/* setInterval para marcar o tempo de leitura */
let h = 0;
let m = 0;
let s = 0;

function startRead(op) {
  let selecionado = op.options[op.selectedIndex].innerHTML;
  let date = new Date();

  if (selecionado === "Lendo") {
    document.getElementById("time-start").innerHTML =
      "Início da leitura: " +
      date.toLocaleDateString().replace("/", ".").replace("/", ".");
    var key = setInterval(function () {
      document.getElementById(
        "time-read"
      ).innerHTML = `Duração da leitura: ${h}:${m}:${s}`;

      s++;

      if (s === 60) {
        m++;
        s = 0;
      }

      if (m === 60) {
        h++;
        m = 0;
      }

      let selecionado = op.options[op.selectedIndex].innerHTML;

      if (selecionado === "Completo" || selecionado === "Pausado") {
        clearInterval(key);
        document.getElementById("time-end").innerHTML =
          "Término da leitura: " +
          date.toLocaleDateString().replace("/", ".").replace("/", ".");
      }
    }, 1000);
  }
}
