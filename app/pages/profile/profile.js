"use strict";
/* Montar a lista de livros pegando os itens do localStorege */

(function () {
  let cardString = "";
  let cardsString = localStorage.getItem("1");
  let cards = JSON.parse(cardsString);

  for (let card of cards) {
    cardString += `<div class='card'>
    <a href='${card.page}'>
      <div class='title'>
        <p>${card.title}</p>
      </div>
      <img src='${card.img}' alt='${card.title}' />
    </a>
  </div>`;
  }

  document.querySelector(".list").innerHTML = cardString;
})();
