(function () {
  let cardsString = localStorage.getItem("1");
  let cards = JSON.parse(cardsString);

  cards = cards.sort(function (a, b) {
    if (a.title > b.title) return 1;

    if (a.title < b.title) return -1;

    return 0;
  });

  for (let card of cards) {
    document.querySelector(".list").innerHTML += `<div class="card">
  <a href="${card.page}">
  <div class="title">
  <p>${card.title}</p>
  </div>
  <img
  src="${card.img}"
  alt=""
  />
  </a>
  </div>`;
  }
})();

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
