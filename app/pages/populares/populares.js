"use strict";

/* Montar a lista de livros pegando os itens do localStorege */

(function () {
  let cardString = "";
  let cardsString = localStorage.getItem("1");
  let cards = JSON.parse(cardsString);

  for (let card of cards) {
    cardString += `<div class="card">
    <a href="${card.page}">
      <div class="title">
        <p>${card.title}</p>
      </div>
      <img src="${card.img}" alt="${card.title}" />
    </a>
  </div>`;
  }

  document.querySelector(".list").innerHTML = cardString;
})();

/* Funcões para eventos onmouseover e onmouseout */

function show(card) {
  card.querySelector(".title").style.display = "block";
}

var hide = function (card) {
  card.querySelector(".title").style.display = "none";
};

(function () {
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
})();
