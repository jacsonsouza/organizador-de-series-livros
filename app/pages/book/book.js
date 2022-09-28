/* Teste seus conhecimentos*/
let contador = 0;
let pontuação = 0;

document.getElementById("bt-questions").onclick = function () {
  let confirma = confirm("Está preparado para testar seus conhecimentos?");

  while (confirma && contador != questions.length) {
    var answer = prompt(questions[contador]);
    answer = answer.toLowerCase();
    if (checkAnswer(answer)) {
      contador++;
      pontuação++;
      alert("Muito bem, você acertou!");
    } else {
      contador++;
      alert("Que pena, você errou!");
    }
  }

  alert(`Você teve ${pontuaçãoTotal()} acertos.`);
};

let questions = [];
let answers = [];

(function () {
  questions[0] = "Qual o nome do protagonista?";
  questions[1] = "Para onde o Rudeus e Eris foram mandados no incidente?";
  questions[2] = "Qual o nome da segunda esposa do protagonista?";

  answers[0] = "rudeus grayrat";
  answers[1] = "continente demoníaco";
  answers[2] = "roxy";
})();

let checkAnswer = (answer) => {
  if (answer == answers[contador]) return true;

  return false;
};

let pontuaçãoTotal = function () {
  return pontuação;
};

let bookTitle = document.getElementById("book-title").innerHTML;

let cardsString = localStorage.getItem("1");
let cards = JSON.parse(cardsString);

let bookPage = function () {
  for (let card of cards) {
    if (card.title == bookTitle) {
      return card;
    }
  }
};

let book = bookPage();

let userString = localStorage.getItem("Jacson");
let user = JSON.parse(userString);

/* setInterval */
let h = 0;
let m = 0;
let s = 0;

function startRead(op) {
  let selecionado = op.options[op.selectedIndex].innerHTML;
  let date = new Date();

  if (selecionado == "Lendo") {
    document.getElementById("time-start").innerHTML =
      "Início da leitura: " + date.toLocaleDateString();
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
        document.getElementById("time-end").innerHTML =
          "Término da leitura: " +
          date.toLocaleDateString().replace("/", ".").replace("/", ".");
        user.books[0] = book;
        localStorage.setItem("Jacson", JSON.stringify(user));
      }
    }, 1000);
  }
}
