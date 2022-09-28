/* Montar a lista de livros pegando os itens do localStorege */

(function () {
  let cardsString = localStorage.getItem("1");
  let cards = JSON.parse(cardsString);

  for (let card of cards) {
    document.querySelector(".list").innerHTML += `<div class="card">
    <a href="${card.page}">
      <div class="title">
        <p>${card.title}</p>
      </div>
      <img src="${card.img}" alt="${card.title}" />
    </a>
  </div>`;
  }
})();

/* Funcões para eventos onmouseover e onmouseout */

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

function show(card) {
  card.querySelector(".title").style.display = "block";
}

var hide = function (card) {
  card.querySelector(".title").style.display = "none";
};
