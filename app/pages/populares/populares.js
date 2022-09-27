(function () {
  let cardsString = localStorage.getItem("1");
  let cards = JSON.parse(cardsString);

  for (let card of cards) {
    document.querySelector("#card-list").innerHTML += `<div class="card">
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
