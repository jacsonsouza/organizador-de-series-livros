const allCards = document.getElementsByClassName("card");

for (let i = 0; i < allCards.length; i++) {
  let card = allCards[i];

  card.onmouseover = function () {
    show(card);
  };

  card.onmouseout = function () {
    hide(card);
  };
}

function show(card) {
  card.querySelector(".title").style.display = "block";
}

var hide = function (card) {
  card.querySelector(".title").style.display = "none";
};

/* Filtros */

let filtro = function () {
  let check = document.querySelectorAll("input[type='checkbox']");
  for (let selecionado of check) {
    if (selecionado.checked) {
      let all = document.getElementsByClassName("card");

      for (let a of all) {
        a.style.display = "none";
      }

      let novels = document.getElementsByName("novels");

      for (let i of novels) {
        i.style.display = "block";
      }
      break;
    } else {
      let all1 = document.getElementsByClassName("card");

      for (let b of all1) {
        b.style.display = "block";
      }
    }
  }
};

document.getElementById("filter").onclick = function () {
  filtro();
};
